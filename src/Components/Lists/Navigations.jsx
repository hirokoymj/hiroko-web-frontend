import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import { useDispatch } from "react-redux";
import { ListItemLink } from "Components/Lists/ListItemLink";

import { setActiveTab } from "../../Redux/tabSlice";

export const LeftNavItems = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItemLink to="/" text="Weather" icon={<CloudOutlinedIcon />} />
      <ListItemLink
        to="/tech/react"
        text="Tech Links"
        icon={<DescriptionOutlinedIcon />}
        onClick={() => dispatch(setActiveTab(0))}
      />
    </>
  );
};
