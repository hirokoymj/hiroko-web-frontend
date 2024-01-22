import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";

import { ListItemLink } from "Components/Lists/ListItemLink";

export const LeftNavItems = () => {
  return (
    <>
      <ListItemLink to="/" text="Weather" icon={<CloudOutlinedIcon />} />
      <ListItemLink
        to="/tech/react"
        text="Tech Links"
        icon={<DescriptionOutlinedIcon />}
      />
    </>
  );
};
