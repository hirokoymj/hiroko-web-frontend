import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export const TechCardSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" component="h1" />
      <Skeleton variant="rect" width="100%" height="250px" />
      <Skeleton variant="text" component="h1" />
      <Skeleton variant="rect" width="100%" height="250px" />
    </>
  );
};

export const TableSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" component="h1" />
      <Skeleton variant="rect" height="250px" />
    </>
  );
};
