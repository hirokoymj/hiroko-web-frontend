import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import get from "lodash/get";
import groupBy from "lodash/groupBy";
import keys from "lodash/keys";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { TOPIC_BY_CATEGORY_ABBR } from "Queries/Topic";

const useStyles = makeStyles((theme) => ({
  linkRoot: {
    "&:hover": {
      backgroundColor: theme.palette.accent.main,
    },
  },
}));

const ListItemLink = (props) => {
  return (
    <ListItem
      button
      component="a"
      divider
      target="_blank"
      rel="noopener"
      {...props}
    />
  );
};

const TechCard = ({ mappedData }) => {
  const classes = useStyles();

  return (
    <div>
      {mappedData.map((data, key) => {
        const { cardTitle, topicData } = data;
        return (
          <div style={{ marginBottom: "25px" }} key={key}>
            <Typography variant="h5">{cardTitle}</Typography>
            <List>
              {topicData.map((topic, key) => {
                return (
                  <ListItemLink
                    href={topic.url}
                    key={key}
                    className={classes.linkRoot}>
                    <ListItemText primary={topic.title} />
                  </ListItemLink>
                );
              })}
            </List>
          </div>
        );
      })}
    </div>
  );
};

export const TechView = () => {
  const { abbr } = useParams();
  console.log(abbr);
  const { data, loading } = useQuery(TOPIC_BY_CATEGORY_ABBR, {
    variables: {
      abbr,
    },
  });

  if (loading) console.log("loading");
  console.log(data);

  const topics = !loading && get(data, "topicByCategoryAbbr", []);

  const topicsByGroup = groupBy(topics, "subCategory.id");
  const ordered = {};
  Object.keys(topicsByGroup).forEach((key) => {
    ordered[key] = topicsByGroup[key];
  });

  const mappedData = keys(ordered).map((key) => {
    return {
      cardTitle: get(ordered[key][0], "subCategory.name", ""),
      topicData: ordered[key],
      order: get(ordered[key][0], "subCategory.order", 0),
    };
  });
  mappedData.sort((a, b) => (a.order < b.order ? -1 : 1));

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      style={{ marginTop: "16px" }}>
      <Grid item xs={12} md={8}>
        {loading ? "loading" : <TechCard mappedData={mappedData} />}
      </Grid>
    </Grid>
  );
};
