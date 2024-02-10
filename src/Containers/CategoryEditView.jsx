import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { SimpleDrawer } from "Components/Dialog/SimpleDrawer";
import { CategoryEditForm } from "Containers/CategoryEditForm";
import { useCategoryEditForm } from "Hooks/useCategoryEditForm";

export const CategoryEditView = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { onSubmit, initialValues, loading } = useCategoryEditForm(id);

  const onClose = () => {
    setOpen(false);
    navigate("/category");
  };

  return (
    <div>
      {loading ? (
        <p>...loading</p>
      ) : (
        <SimpleDrawer
          open={open}
          title="Edit Category"
          onClose={onClose}
          submitLabel="Edit">
          <CategoryEditForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            loading={loading}
          />
        </SimpleDrawer>
      )}
    </div>
  );
};
