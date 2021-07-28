import React from 'react';
import { FORM_KEYS } from '@modules/main/utils';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core';
const ListBrands = ({ brands, form, onChange }) => {
  if (!brands.length) return null;

  return (
    <Grid item xs={12} md={2} lg={2} className="grid-list">
      <Autocomplete
        id="combo-box-brand"
        value={form.brand}
        options={brands}
        getOptionLabel={(option) => option}
        onChange={(event, value) => onChange(FORM_KEYS.BRAND, value)}
        renderInput={(params) => (
          <TextField {...params} label="Marca" variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default ListBrands;
