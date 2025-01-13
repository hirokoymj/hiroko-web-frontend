import React from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { DashboardHeader } from "Components/Headers/DashboardHeader";
import { PageFooter } from "Components/Layouts/Footer";
import { WeatherView } from "Containers/WeatherView";
import { TechTabs } from "Containers/TechTabs";
import { CategoryView } from "Containers/CategoryView";
import { SubCategoryView } from "Containers/SubCategoryView";
import { TopicView } from "Containers/TopicView";
import { LoginView } from "Containers/LoginView";
import { SignupView } from "Containers/SignupView";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export const DashboardController = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <DashboardHeader
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Routes>
              <Route path="/" element={<WeatherView />} />
              <Route path="tech/*" element={<TechTabs />} />
              <Route path="category/*" element={<CategoryView />} />
              <Route path="subCategory/*" element={<SubCategoryView />} />
              <Route path="topic/*" element={<TopicView />} />
              <Route path="login" element={<LoginView />} />
              <Route path="signup" element={<SignupView />} />
            </Routes>
          </Grid>
          <Grid item xs={12}>
            <PageFooter />
          </Grid>
        </Container>
      </main>
    </div>
  );
};
