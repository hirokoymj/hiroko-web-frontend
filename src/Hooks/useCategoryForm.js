import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import { CREATE_CATEGORY } from "Mutations/Category";
import { CATEGORIES } from "Queries/Category";

export const useCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createCategory] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [CATEGORIES],
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
