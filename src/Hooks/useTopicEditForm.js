import { useQuery, useMutation } from "@apollo/client";
import get from "lodash/get";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import { UPDATE_TOPIC } from "Mutations/Topic";
import { CATEGORIES } from "Queries/Category";
import { TOPIC_BY_ID } from "Queries/Topic";
import { SUB_CATEGORY_BY_CATEGORY } from "Queries/SubCategory";
import { makeDropdownOptions } from "Components/FormController/common";

export const useTopicEditForm = (topicId, categoryId) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [updateTopic] = useMutation(UPDATE_TOPIC);
  const { data, loading } = useQuery(CATEGORIES);

  const { data: subCategoryData, loading: subCategoryLoading } = useQuery(
    SUB_CATEGORY_BY_CATEGORY,
    {
      variables: {
        categoryId: categoryId === "undefined" ? "" : categoryId,
      },
    }
  );

  const { data: topicData, loading: topicLoading } = useQuery(TOPIC_BY_ID, {
    variables: {
      id: topicId,
    },
  });

  const defaultValues = !topicLoading && {
    title: get(topicData, "topicById.title", ""),
    url: get(topicData, "topicById.url", ""),
    category: get(topicData, "topicById.category.id", ""),
    subCategory: get(topicData, "topicById.subCategory.id", ""),
    order: get(topicData, "topicById.order", 0),
  };

  const category_options = makeDropdownOptions(
    data,
    "categories.categoryFeed",
    loading
  );
  const subCategory_options = makeDropdownOptions(
    subCategoryData,
    "subCategoryByCategory",
    subCategoryLoading
  );

  const onSubmit = async (values) => {
    try {
      await updateTopic({
        variables: {
          id: topicId,
          input: {
            ...values,
            order: parseInt(values.order),
          },
        },
      });
      enqueueSnackbar("Topic successfully updated!", {
        variant: "success",
      });
      navigate("/topicList");
    } catch (e) {
      console.error(e);
      enqueueSnackbar("Faild to update Topic.", {
        variant: "error",
      });
    }
  };

  return {
    onSubmit,
    category_options,
    subCategory_options,
    defaultValues,
    loading: loading || subCategoryLoading || topicLoading,
  };
};
