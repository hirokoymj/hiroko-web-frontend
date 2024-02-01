import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import get from "lodash/get";
import map from "lodash/map";
import { Button } from "@material-ui/core";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";

import { CATEGORIES } from "Queries/Category";
import { Table } from "Components/Tables/Table";
import { ActionRouterButton } from "Components/Buttons/ActionRouterButton";
import { ActionButton } from "Components/Buttons/ActionButton";

const useStyles = makeStyles((theme) => ({
  loadMoreButton: {
    width: "45%",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3),
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
            fetchMoreResult.categories.categoryFeed = [
              ...prevResult.categories.categoryFeed,
              ...fetchMoreResult.categories.categoryFeed,
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

export const CategoryTable = ({ openDialog }) => {
  const classes = useStyles();
  const { data, loading, error, fetchMore } = useQuery(CATEGORIES, {
    variables: {
      cursor: null,
      limit: 10,
    },
  });
  const categories = !loading && get(data, "categories.categoryFeed", []);
  const pageInfo = !loading && get(data, "categories.pageInfo", {});
  const { isLoadingMore, fetchMoreData, hasNextPage } = useLoadMore(
    loading,
    error,
    fetchMore,
    pageInfo
  );

  const mappedData = map(
    categories,
    ({ id, name, abbr, createdAt, updatedAt }) => {
      const actions = (
        <>
          <ActionRouterButton
            to={`/categoryList/${id}`}
            title="Edit Category"
            icon="edit"
          />
          <ActionButton onClick={() => openDialog(id)} icon="delete" />
        </>
      );
      const created = format(new Date(createdAt), "MM/dd/yyyy");
      const updated = format(new Date(updatedAt), "MM/dd/yyyy");

      return {
        id,
        name,
        abbr,
        created,
        updated,
        actions,
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
            colmuns={[
              {
                label: "Category",
                field: "name",
              },
              {
                label: "Abbreviation",
                field: "abbr",
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
          <div className={classes.buttons}>
            <Button
              onClick={fetchMoreData}
              variant="contained"
              color="primary"
              disabled={!hasNextPage}
              className={classes.loadMoreButton}>
              {isLoadingMore ? "Loading" : "Loard More"}
            </Button>
          </div>
        </>
      )}
    </>
  );
};
