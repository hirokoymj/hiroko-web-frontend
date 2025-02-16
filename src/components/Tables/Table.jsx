import React from "react";
import { default as MuiTable } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { TableSkeleton } from "components/Skeleton/LoadingSkeleton";

export const Table = ({ data, colmuns, loading, hover }) => {
  return (
    <>
      {loading ? (
        <TableSkeleton />
      ) : (
        <>
          <MuiTable aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                {colmuns.map(({ label, align }, key) => {
                  return (
                    <TableCell
                      key={key}
                      align={align}
                      style={{ whiteSpace: "nowrap" }}>
                      {label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, index) => {
                return (
                  <TableRow key={index} hover={hover}>
                    {colmuns.map((col, key) => {
                      return (
                        <TableCell scope="row" key={key} align={col.align}>
                          {d[col.field]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </MuiTable>
        </>
      )}
    </>
  );
};
