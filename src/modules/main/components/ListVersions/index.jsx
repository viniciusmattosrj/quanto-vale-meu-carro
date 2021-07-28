import React from 'react';
import { FORM_KEYS } from '@modules/main/utils';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid } from '@material-ui/core';

const ListVersions = ({ form, versions, onChange }) => {
  return (
    <Grid item xs={12} md={3} lg={3} className="grid-list">
      <Autocomplete
        disabled={!form.year || !versions.length}
        id="combo-box-version"
        value={form.version}
        options={versions}
        getOptionLabel={(option) => option.version}
        onChange={(event, value) => onChange(FORM_KEYS.VERSION, value)}
        renderInput={(params) => (
          <TextField {...params} label="Versão" variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default ListVersions;
