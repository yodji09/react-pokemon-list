import React from 'react'
import PokeDetail from '../components/PokeDetail';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  }
}));

export default function Detail() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} spacing={1} className={classes.root}>
        <PokeDetail></PokeDetail>
      </Grid>
    </Grid>
  )
}
