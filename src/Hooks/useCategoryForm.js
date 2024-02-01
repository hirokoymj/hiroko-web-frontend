import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";

import { CREATE_CATEGORY } from "Mutations/Category";
import { useNavigate } from "react-router";

export const useCategoryForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [createCategory] = useMutation(CREATE_CATEGORY);

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
      navigate(0);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    onSubmit,
  };
};
