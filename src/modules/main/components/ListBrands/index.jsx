import './style.css';
import React from 'react';
import { FORM_KEYS } from '@modules/main/screens/Home';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core';
const ListBrands = ({ brands, onChange }) => {
  if (!brands.length) return null;

  return (
    <Grid item xs={12} md={3} lg={3} className="grid-list">
      <Autocomplete
        id="combo-box-demo"
        options={brands}
        getOptionLabel={(option) => option}
        style={{ width: 200 }}
        onChange={(event, value) => onChange(FORM_KEYS.BRAND, value)}
        renderInput={(params) => (
          <TextField {...params} label="Marca" variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default ListBrands;
