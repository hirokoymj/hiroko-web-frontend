import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TechView } from "Containers/TechView";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";

import { setActiveTab } from "../Redux/tabSlice";
import { config } from "Config/config";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const { TabNames } = config;

export const TechTabs = () => {
  const classes = useStyles();
  const tab = useSelector((state) => state.tab.value);
  const dispatch = useDispatch();

  const handleTabChange = (event, newValue) => {
    dispatch(dispatch(setActiveTab(newValue)));
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label={TabNames.React} component={Link} to="react" value={0} />
        <Tab label={TabNames.JavaScript} component={Link} to="js" value={1} />
        <Tab label={TabNames.GraphQL} component={Link} to="graphQL" value={2} />
        <Tab label={TabNames.Git} component={Link} to="git" value={3} />
        <Tab label={TabNames.HTMLCSS} component={Link} to="html" value={4} />
      </Tabs>
      <Routes>
        <Route path=":abbr" element={<TechView />} />
      </Routes>
    </Paper>
  );
};
