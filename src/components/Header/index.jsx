import React from 'react';
import LogoImage from '@assets/images/logo.png';
import { Grid, Typography, Paper } from '@material-ui/core';
import { useStyles } from './style';

const Header = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={10} lg={10}>
          <Typography className={classes.label} variant="h4" align="center">
            QUANTO VALE SEU VEICULO?
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
          <img src={LogoImage} alt="Logo" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
