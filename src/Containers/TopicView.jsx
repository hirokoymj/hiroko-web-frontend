import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { Routes, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { TopicTable } from "Components/Tables/TopicTable";
import { AlertDialog } from "Components/Dialog/AlertDialog";
import { Title } from "Components/Layouts/Title";
import { DELETE_TOPIC } from "Mutations/Topic";
import { TOPIC_ALL } from "Queries/Topic";
import { TopicEditView } from "Containers/TopicEditView";
import { TopicForm } from "Containers/TopicForm";

export const TopicView = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [topicId, setTopicId] = useState("");
  const [deleteTopic, { loading }] = useMutation(DELETE_TOPIC, {
    refetchQueries: [TOPIC_ALL],
  });

  const handleClose = () => setOpen(false);

  const handleOpen = (id) => {
    setTopicId(id);
    setOpen(true);
  };

  const handleDeleteTopic = async () => {
    try {
      await deleteTopic({
        variables: {
          id: topicId,
        },
      });
      enqueueSnackbar("Topic successfully deleted!", {
        variant: "success",
      });
      handleClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path=":topicId/:categoryId" element={<TopicEditView />} />
      </Routes>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Title text="Create Links" />
          <Paper>
            <TopicForm />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Container maxWidth="lg">
              <TopicTable openDialog={handleOpen} />
            </Container>
          </Paper>
        </Grid>
        <AlertDialog
          open={open}
          onClose={handleClose}
          title="Delete Topic"
          content={
            <>
              <Typography component="p" variant="body1">
                Do you want to to delete a topic?
              </Typography>
            </>
          }
          actionLabel={loading ? "Deleting" : "Delete"}
          action={handleDeleteTopic}
          cancelLabel="Cancel"
          cancel={handleClose}
        />
      </Grid>
    </Container>
  );
};
