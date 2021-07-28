import './styles.css';
import React from 'react';
import { Grid } from '@material-ui/core';

const InformationBox = ({ title, description, type }) => {
  if (description === undefined) return null;
  const displayInformation =
    type === 'money' ? `R$ ${description}` : description;

  return (
    <Grid item xs={12} md={4} lg={4} className="information-grid">
      <div className="information-box-title">
        <p>{title}</p>
      </div>

      <div className="information-box-text">
        <p>{displayInformation}</p>
      </div>
    </Grid>
  );
};

export default InformationBox;
