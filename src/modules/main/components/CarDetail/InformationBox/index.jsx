import './styles.css';
import React from 'react';
import { Grid } from '@material-ui/core';

const InformationBox = ({ title, description }) => {
  return (
    <Grid item xs={12} md={4} lg={4} className="information-grid">
      <div className="information-box-title">
        <p>{title}</p>
      </div>

      <div className="information-box-text">
        <p>{description}</p>
      </div>
    </Grid>
  );
};

export default InformationBox;
