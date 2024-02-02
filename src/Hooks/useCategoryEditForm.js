import { useQuery, useMutation } from "@apollo/client";
import get from "lodash/get";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import { UPDATE_CATEGORY } from "Mutations/Category";
import { CATEGORY_BY_ID } from "Queries/Category";
import { CATEGORIES } from "Queries/Category";

export const useCategoryEditForm = (id) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [updateCategory] = useMutation(UPDATE_CATEGORY, {
    refetchQueries: [CATEGORIES],
  });
  const { data, loading } = useQuery(CATEGORY_BY_ID, {
    variables: {
      id,
    },
  });
  if (!loading) console.log(data);
  const initialValues = !loading && {
    name: get(data, "categoryById.name", ""),
    abbr: get(data, "categoryById.abbr", ""),
  };

  const onSubmit = async (values) => {
    try {
      const { name, abbr } = values;
      await updateCategory({
        variables: {
          id,
          input: {
            name,
            abbr,
          },
        },
      });
      enqueueSnackbar("Category successfully updated!", {
        variant: "success",
      });
      navigate("/categoryList");
    } catch (e) {
      console.error(e);
      enqueueSnackbar("Failed to update category", {
        variant: "error",
      });
    }
  };

  return {
    onSubmit,
    initialValues,
    loading,
  };
};
