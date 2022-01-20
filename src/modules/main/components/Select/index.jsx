import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core';

const Select = ({ form, onChange, id, data, value, label }) => {
  //if (!data.length) return null;

  return (
    <Grid item xs={12} md={2} lg={2} className="grid-list">
      <Autocomplete
        id={id}
        value={value}
        options={data}
        getOptionLabel={(option) => {
          if (typeof option === 'object') {
            return option.version
          }
          return option.toString()
        }}
        onChange={onChange}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default Select;
