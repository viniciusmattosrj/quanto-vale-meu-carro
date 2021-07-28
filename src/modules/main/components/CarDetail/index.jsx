import React from 'react';
import Empty from '@modules/main/components/Empty';
import InformationBox from '@modules/main/components/CarDetail/InformationBox';
import { fieldsInCar } from '@modules/main/utils';
import { Grid } from '@material-ui/core';

const CarDetail = ({ data, form }) => {
  if (!data && !form.brand && !form.model && !form.year && !form.version)
    return null;

  if (!data) return <Empty message="Nenhum registro encontrado" />;

  return (
    <Grid container xs={12} md={12} lg={12} direction="row">
      {fieldsInCar.map((information, index) => {
        return (
          <InformationBox
            title={information.label}
            key={index.toString()}
            description={data[information.field]}
          />
        );
      })}
    </Grid>
  );
};

export default CarDetail;
