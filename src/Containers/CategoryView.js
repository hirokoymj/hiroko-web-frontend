import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";
import { Routes, Route, useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { CategoryTable } from "Components/Tables/CategoryTable";
import { AlertDialog } from "Components/Dialog/AlertDialog";
import { DELETE_CATEGORY } from "Mutations/Category";
import { CategoryForm } from "./CategoryForm";
import { CategoryEditView } from "./CategoryEditView";

export const CategoryView = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [deleteCategory] = useMutation(DELETE_CATEGORY);

  const handleClose = () => setOpen(false);

  const handleOpen = (id) => {
    setCategoryId(id);
    setOpen(true);
  };

  const handleDeleteCategory = async () => {
    try {
      await deleteCategory({
        variables: {
          id: categoryId,
        },
      });
      enqueueSnackbar("Category successfully deleted!", {
        variant: "success",
      });
      handleClose();
      navigate(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path=":id" element={<CategoryEditView />} />
      </Routes>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Paper>
            <CategoryForm />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <CategoryTable openDialog={handleOpen} />
          </Paper>
        </Grid>
      </Grid>
      <AlertDialog
        open={open}
        onClose={handleClose}
        title="Delete Category"
        content={
          <>
            <Typography component="p" variant="body1">
              Are you sure to delete the category?
            </Typography>
          </>
        }
        actionLabel="Delete"
        action={handleDeleteCategory}
        cancelLabel="Cancel"
        cancel={handleClose}
      />
    </Container>
  );
};
