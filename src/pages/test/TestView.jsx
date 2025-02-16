import React from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

export const TestView = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        flexDirection="row"
        p={1}
        m={1}
        justifyContent="space-between"
        bgcolor="background.paper">
        <Box p={1} m={1} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={1} m={1} bgcolor="grey.300">
          Item 2
        </Box>
        <Box p={1} m={1} bgcolor="grey.300">
          Item 3
        </Box>
        <Divider style={{ backgroundColor: "red" }} width="50%" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={1}
        m={1}
        bgcolor="background.paper">
        <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 2
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 3
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        p={1}
        m={1}
        justifyContent="space-between"
        alignItems="center"
        bgcolor="background.paper">
        <Divider style={{ backgroundColor: "red", width: "45%" }} />
        OR
        <Divider style={{ backgroundColor: "red", width: "45%" }} />
      </Box>
      <Box xs={{ fontSize: 12 }} sm={{ fontSize: 18 }} md={{ fontSize: 24 }}>
        Collocation API
      </Box>
    </div>
  );
};
