import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import { useDispatch } from "react-redux";
import ListSubheader from "@material-ui/core/ListSubheader";

import { ListItemLink } from "Components/Lists/ListItemLink";
import { setActiveTab } from "../../Redux/tabSlice";

export const MainNavItems = () => {
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

export const SecondaryNavItems = () => {
  return (
    <>
      <ListSubheader inset>Admin menu</ListSubheader>
      <ListItemLink
        to="/category"
        text="Create Category"
        icon={<DescriptionOutlinedIcon />}
      />
      <ListItemLink
        to="/subCategory"
        text="Create Subcategory"
        icon={<DescriptionOutlinedIcon />}
      />
      <ListItemLink
        to="/topic"
        text="Create Links"
        icon={<DescriptionOutlinedIcon />}
      />
    </>
  );
};
