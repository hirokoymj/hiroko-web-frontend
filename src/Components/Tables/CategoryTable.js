import React from "react";
import { useQuery } from "@apollo/client";
import map from "lodash/map";
import get from "lodash/get";
import { format } from "date-fns";

import { CATEGORY_ALL } from "Queries/Category";
import { Table } from "Components/Tables/Table";
import { ActionRouterButton } from "Components/Buttons/ActionRouterButton";
import { ActionButton } from "Components/Buttons/ActionButton";

export const CategoryTable = ({ openDialog }) => {
  const { data, loading, error } = useQuery(CATEGORY_ALL);

  if (error) return <p>Error : {error.message}</p>;

  const category_data = !loading && get(data, "categoryAll", []);
  const mappedData = map(
    category_data,
    ({ id, name, abbr, createdAt, updatedAt }) => {
      const actions = (
        <>
          <ActionRouterButton
            to={`/category/${id}`}
            title="Edit Category"
            icon="edit"
          />
          <ActionButton onClick={() => openDialog(id)} icon="delete" />
        </>
      );
      const created = format(new Date(createdAt), "MM/dd/yyyy");
      const updated = format(new Date(updatedAt), "MM/dd/yyyy");

      return {
        id,
        name,
        abbr,
        created,
        updated,
        actions,
      };
    }
  );

  return (
    <Table
      data={mappedData}
      loading={loading}
      colmuns={[
        {
          label: "Category",
          field: "name",
        },
        {
          label: "Abbreviation",
          field: "abbr",
        },
        {
          label: "Created",
          field: "created",
        },
        {
          label: "Updated",
          field: "updated",
        },
        {
          label: "Actions",
          field: "actions",
          align: "center",
        },
      ]}
    />
  );
};
