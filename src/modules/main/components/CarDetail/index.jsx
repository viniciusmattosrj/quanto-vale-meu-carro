import React from 'react';
import Empty from '@modules/main/components/Empty';
import InformationBox from '@modules/main/components/CarDetail/InformationBox';
import { fieldsInCar } from '@modules/main/utils';
import { Grid, CircularProgress, Box } from '@material-ui/core';

const CarDetail = ({ data, form, loading }) => {
  if (loading)
    return (
      <Box textAlign="center" p={5}>
        <CircularProgress />
      </Box>
    );

  if (!data && !form.brand && !form.model && !form.year && !form.version)
    return null;

  if (!data) return <Empty message="Nenhum registro encontrado" />;

  return (
    <Grid container direction="row">
      {fieldsInCar.map((information, index) => {
        return (
          <InformationBox
            title={information.label}
            key={index.toString()}
            description={data[information.field]}
            type={information.type}
          />
        );
      })}
    </Grid>
  );
};

export default CarDetail;
