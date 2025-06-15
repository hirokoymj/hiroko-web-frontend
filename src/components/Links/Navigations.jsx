import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import { useDispatch } from "react-redux";

import { ListItemLink } from "components/Lists/ListItemLink";
import { setActiveTab } from "../../redux/tabSlice";
import Button from "@material-ui/core/Button";

export const MainNavItems = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItemLink to="/" text="Weather" icon={<CloudOutlinedIcon />} />
      <ListItemLink
        to="tech/react"
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
      <ListItemLink
        to="category"
        text="Create Category"
        icon={<DescriptionOutlinedIcon />}
      />
      <ListItemLink
        to="subCategory"
        text="Create Subcategory"
        icon={<DescriptionOutlinedIcon />}
      />
      <ListItemLink
        to="topic"
        text="Create Links"
        icon={<DescriptionOutlinedIcon />}
      />
    </>
  );
};
