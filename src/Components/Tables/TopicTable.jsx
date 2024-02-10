import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import get from "lodash/get";
import map from "lodash/map";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";

import { TOPICS } from "Queries/Topic";
import { Table } from "Components/Tables/Table";
import { ActionRouterButton } from "Components/Buttons/ActionRouterButton";
import { ActionButton } from "Components/Buttons/ActionButton";
// import { useCategoryFilterState } from "Components/Tables/hooks/useCategoryFilterState";
// import { TableHead } from "Components/Tables/TableHead";

const useStyles = makeStyles((theme) => ({
  loadMoreButton: {
    width: "30%",
    margin: "auto",
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const useLoadMore = (loading, error, fetchMore, pageInfo) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { hasNextPage, endCursor } = pageInfo;
  const limit = 5;

  const fetchMoreData = () => {
    if (!loading && !error) {
      if (hasNextPage) {
        setIsLoadingMore(true);
        fetchMore({
          variables: { cursor: endCursor, limit },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            fetchMoreResult.topics.topicFeed = [
              ...prevResult.topics.topicFeed,
              ...fetchMoreResult.topics.topicFeed,
            ];
            return fetchMoreResult;
          },
        });
        setIsLoadingMore(false);
      }
    }
  };

  return { fetchMoreData, isLoadingMore, hasNextPage };
};

export const TopicTable = ({ openDialog }) => {
  const classes = useStyles();
  // const {
  //   category_loading,
  //   selectedFilters,
  //   filters,
  //   handleFilterChange,
  //   handleDeleteFilter,
  // } = useCategoryFilterState();
  const { data, loading, error, fetchMore } = useQuery(TOPICS, {
    variables: {
      limit: 50,
    },
  });

  const topics = !loading && get(data, "topics.topicFeed", []);
  const pageInfo = !loading && get(data, "topics.pageInfo", {});
  console.log("Load More");
  console.log(pageInfo);
  const { isLoadingMore, fetchMoreData, hasNextPage } = useLoadMore(
    loading,
    error,
    fetchMore,
    pageInfo
  );

  const mappedData = map(
    topics,
    ({
      id,
      title,
      url,
      category,
      subCategory,
      order,
      createdAt,
      updatedAt,
    }) => {
      const categoryName = get(category, "name", "");
      const subCategoryName = get(subCategory, "name", "");
      const categoryId = get(category, "id", "");

      const titleLink = (
        <Link
          href={url}
          variant="body2"
          target="_blank"
          rel="noreferrer"
          color="secondary">
          {title}
        </Link>
      );

      const actions = (
        <>
          <ActionRouterButton
            to={`/topicList/${id}/${categoryId}`}
            title="Edit Topic"
            icon="edit"
          />
          <ActionButton onClick={() => openDialog(id)} icon="delete" />
        </>
      );
      const created = format(new Date(createdAt), "MM/dd/yyyy");
      const updated = format(new Date(updatedAt), "MM/dd/yyyy");

      return {
        id,
        titleLink,
        url,
        categoryName,
        subCategoryName,
        created,
        updated,
        actions,
        order,
      };
    }
  );

  return (
    <>
      {loading ? (
        <div>...loading</div>
      ) : (
        <>
          <Table
            data={mappedData}
            loading={loading}
            hover={true}
            colmuns={[
              {
                label: "Title",
                field: "titleLink",
              },
              {
                label: "Category",
                field: "categoryName",
              },
              {
                label: "Sub Category",
                field: "subCategoryName",
              },
              {
                label: "Order",
                field: "order",
              },
              {
                label: "Created",
                field: "created",
              },
              {
                label: "Updated",
                field: "updated",
              },
              {
                label: "Actions",
                field: "actions",
                align: "center",
              },
            ]}
          />
          <Button
            onClick={fetchMoreData}
            variant="contained"
            color="primary"
            disabled={!hasNextPage}
            className={classes.loadMoreButton}>
            {isLoadingMore ? "Loading" : "Loard More"}
          </Button>
        </>
      )}
    </>
  );
};
