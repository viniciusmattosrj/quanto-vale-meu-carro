import React from 'react';
import { FORM_KEYS } from '@modules/main/utils';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core';

const ListYears = ({ form, years, onChange }) => {
  return (
    <Grid item xs={12} md={2} lg={2} className="grid-list">
      <Autocomplete
        disabled={!form.brand || !form.model || !years.length}
        id="combo-box-year"
        value={form.year}
        options={years}
        getOptionLabel={(option) => option}
        onChange={(event, value) => onChange(FORM_KEYS.YEAR, value)}
        renderInput={(params) => (
          <TextField {...params} label="Ano" variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default ListYears;
