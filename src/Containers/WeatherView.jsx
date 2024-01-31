import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { DailyForecast } from "Components/Weather/DailyForcast";
import { CurrentWeatherInfo } from "Components/Weather/CurrentWeatherInfo";
import { config } from "Config/config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const WeatherView = () => {
  const classes = useStyles();
  const { TOKYO_LOCATION } = config;
  const [city] = useState(TOKYO_LOCATION.city);
  console.log("WeatherView");
  console.log(city);
  return (
    <Container maxWidth="md">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <CurrentWeatherInfo city={city} />
        </Grid>
        <Grid item xs={12}>
          <DailyForecast city={city} />
        </Grid>
      </Grid>
    </Container>
  );
};
