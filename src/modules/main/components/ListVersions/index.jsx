import './style.css';
import React from 'react';
import { FORM_KEYS } from '@modules/main/screens/Home';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core';

const ListVersions = ({ form, versions, onChange }) => {
  if (!form.year || !versions.length) return null;
  return (
    <Grid item xs={12} md={3} lg={3} className="grid-list">
      <Autocomplete
        id="combo-box-demo"
        options={versions}
        getOptionLabel={(option) => option.version}
        style={{ width: 280 }}
        onChange={(event, value) =>
          onChange(FORM_KEYS.VERSION, value.versionId)
        }
        renderInput={(params) => (
          <TextField {...params} label="Versão" variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default ListVersions;
