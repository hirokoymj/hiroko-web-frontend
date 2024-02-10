import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import { CREATE_TOPIC } from "Mutations/Topic";
import { CATEGORIES } from "Queries/Category";
import { TOPICS } from "Queries/Topic";
import { SUB_CATEGORY_BY_CATEGORY } from "Queries/SubCategory";
import { makeDropdownOptions } from "Components/FormController/common";

export const useTopicForm = (categoryId) => {
  const { enqueueSnackbar } = useSnackbar();

  // Create Topic
  const [createTopic] = useMutation(CREATE_TOPIC, {
    refetchQueries: [TOPICS],
  });
  //
  // Category Dropdown
  //
  const { data, loading } = useQuery(CATEGORIES);
  const category_options = makeDropdownOptions(
    data,
    "categories.categoryFeed",
    loading
  );
  //
  // SubCategory Dropdown
  //
  const { data: subCategoryData, loading: subCategoryLoading } = useQuery(
    SUB_CATEGORY_BY_CATEGORY,
    {
      variables: {
        categoryId: categoryId,
      },
    }
  );

  // Make dropdown
  const subCategory_options = makeDropdownOptions(
    subCategoryData,
    "subCategoryByCategory",
    subCategoryLoading
  );

  const onSubmit = async (values) => {
    try {
      await createTopic({
        variables: {
          input: {
            ...values,
            order: parseInt(values.order),
          },
        },
      });
      enqueueSnackbar("New topic has been created!", {
        variant: "success",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const defaultValues = {
    category: "",
    subCategory: "",
    url: "",
    title: "",
    order: "", // <input type=number> type is number but string.
  };

  return {
    onSubmit,
    category_options,
    loading: loading || subCategoryLoading,
    defaultValues,
    subCategory_options,
  };
};
