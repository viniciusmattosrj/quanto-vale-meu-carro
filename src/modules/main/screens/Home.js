import React from 'react';
import Layout from '@components/Layout';
import useCreditas from '@modules/main/hooks/useCreditas';
import CarDetail from '@modules/main/components/CarDetail';
import Select from '@modules/main/components/Select';
import DisplayErrors from '@modules/main/components/DisplayErrors';
import Banner from '@components/Banner';
import { Grid, Box, Button } from '@material-ui/core';
import { FORM_KEYS } from '@modules/main/utils';

const Home = () => {
  const { models, operations } = useCreditas();

  return (
    <Layout>
      <Banner />
      <DisplayErrors errors={models.errors} />
      <Grid container spacing={2} alignItems="center" direction="row">
        <Select
          id="combo-box-brand"
          value={models.userChoose.brand}
          data={models.response.brands}
          onChange={(event, value) => {
            operations.updateForm({ key: FORM_KEYS.BRAND, value });
          }}
          label="Marca"
        />

        <Select
          id="combo-box-model"
          value={models.userChoose.model}
          data={models.response.models}
          onChange={(event, value) =>
            operations.updateForm({ key: FORM_KEYS.MODEL, value })
          }
          label="Modelo"
        />

        <Select
          id="combo-box-year"
          value={models.userChoose.year}
          data={models.response.years}
          onChange={(event, value) =>
            operations.updateForm({ key: FORM_KEYS.YEAR, value })
          }
          label="Ano"
        />

        <Select
          id="combo-box-version"
          value={models.userChoose.version}
          data={models.response.versions}
          onChange={(event, value) => {
            operations.updateForm({ key: FORM_KEYS.VERSION, value })
          }}
          label="Versao"
        />

        <Grid item xs={12} md={2} lg={2}>
          <Box textAlign="center">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disableElevation
              onClick={operations.clearCar}
            >
              Limpar
            </Button>
          </Box>
        </Grid>
      </Grid>
      <CarDetail
        data={models.response.car_information}
        form={models.userChoose}
        loading={models.loading}
      />
    </Layout>
  );
};

export default Home;
