import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export const WeatherLayout = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="row"
        m={0}
        paddingBottom={2}
        paddingTop={2}
        width="45%"
        justifyContent="space-between"
        alignItems="center">
        <Link component={NavLink} to="tokyo" variant="h5">
          Tokyo
        </Link>
        <Link component={NavLink} to="dallas" variant="h5">
          Dallas
        </Link>
        <Link component={NavLink} to="los angeles" variant="h5">
          Los Angeles
        </Link>
      </Box>
      <Outlet />
    </Container>
  );
};
