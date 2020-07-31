import React from 'react'
import Pokemon from '../components/Pokemon';
import {useSelector} from 'react-redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  }
}));

export default function Favourites() {
  const classes = useStyles()
  const listFavorites = useSelector((state) => state.favorites)

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} spacing={1} className={classes.root}>
        {listFavorites.map((favorites, index) => {
          return (<Pokemon list={favorites} index={index} key={index+500} />)
        })}
      </Grid>
    </Grid>
  )
}
