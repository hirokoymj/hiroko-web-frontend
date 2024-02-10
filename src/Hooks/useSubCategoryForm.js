import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import { CREATE_SUB_CATEGORY } from "Mutations/SubCategory";
import { SUB_CATEGORY_ALL } from "Queries/SubCategory";
import { CATEGORIES } from "Queries/Category";
import { makeDropdownOptions } from "Components/FormController/common";

export const useSubCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createSubCategory] = useMutation(CREATE_SUB_CATEGORY, {
    refetchQueries: [SUB_CATEGORY_ALL],
  });

  const { data, loading } = useQuery(CATEGORIES);
  const category_options = makeDropdownOptions(
    data,
    "categories.categoryFeed",
    loading
  );

  const onSubmit = async (values) => {
    try {
      const { name, categoryId, order } = values;
      await createSubCategory({
        variables: {
          input: {
            name,
            category: categoryId,
            order: parseInt(order),
          },
        },
      });
      enqueueSnackbar("New sub category has been created!", {
        variant: "success",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onSubmit,
    category_options,
    loading,
  };
};
