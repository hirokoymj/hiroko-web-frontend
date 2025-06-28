import React from 'react';
import { useQuery } from '@apollo/client';
import { CATEGORY_ALL } from 'queries/Category';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Outlet } from 'react-router-dom';

export const TestLayout = () => {
  const { data, loading, error } = useQuery(CATEGORY_ALL);
  const category_data = !loading && get(data, 'categoryAll', []);

  return (
    <Container maxWidth="lg">
      <Outlet />
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <h1>Test View</h1>
          {category_data.map((category) => (
            <div>{category.name}</div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
