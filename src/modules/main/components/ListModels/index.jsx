import React from 'react';
import { FORM_KEYS } from '@modules/main/utils';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core';

const ListModels = ({ form, models, onChange }) => {
  return (
    <Grid item xs={12} md={2} lg={2} className="grid-list">
      <Autocomplete
        disabled={!form.brand || !models.length}
        id="combo-box-model"
        options={models}
        value={form.model}
        getOptionLabel={(option) => option}
        onChange={(event, value) => onChange(FORM_KEYS.MODEL, value)}
        renderInput={(params) => (
          <TextField {...params} label="Modelo" variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default ListModels;
