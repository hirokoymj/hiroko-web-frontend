import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

export const DailyForecastSkeleton = () => {
  return (
    <>
      <Skeleton component="h2" variant="h1" width="100%" />
      <Skeleton variant="rect" width="100%" height="400px" />
    </>
  );
};

export const CurrentWeatherSkeleton = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Skeleton variant="rect" width="100%" height="200px" />
      </Grid>
      <Grid item xs={12} md={7}>
        <Skeleton variant="rect" width="100%" height="200px" />
      </Grid>
    </Grid>
  );
};
