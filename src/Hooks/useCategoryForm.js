import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import { CREATE_CATEGORY } from "mutations/Category";
import { CATEGORY_ALL } from "queries/Category";

export const useCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createCategory] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [CATEGORY_ALL],
  });

  const onSubmit = async (values) => {
    try {
      await createCategory({
        variables: {
          input: {
            ...values,
          },
        },
      });
      enqueueSnackbar("New category has been created!", {
        variant: "success",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onSubmit,
  };
};
