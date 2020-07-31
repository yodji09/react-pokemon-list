import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pokemon from '../components/Pokemon';
import { Grid } from '@material-ui/core';
import Loading from '../components/Loading';
import {useSelector, useDispatch} from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { fetchData, setPage } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  pagination: {
    width: '100%',
    justifyContent: 'center'
  }
}));

export default function Home () {
  const classes = useStyles();
  const pokemonsList = useSelector((state) => state.data)
  const err = useSelector((state) => state.err)
  const loading = useSelector((state) => state.loading)
  let [urlextend, setUrl] = useState('pokemon')
  const page = useSelector((state) => state.page)
  const dispatch = useDispatch()
  const search = useSelector(state => state.search)

  useEffect(() => {
    dispatch(fetchData(urlextend))
  }, [dispatch, urlextend])

  function handlePage(event, value) {
    event.preventDefault();
    dispatch(setPage(value))
    if(value === 1) {
      setUrl('pokemon')
    } else {
      const urlindex = (value - 1) * 20
      setUrl('pokemon?limit=20&offset=' + urlindex)
    }
  }
  //pokemonsList = pokemonsList.filter(element => {
  //  console.log(element.name)
  //  return (
  //    element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  //  );
  //})

  if(loading) return (
    <Loading loading={loading}></Loading>
  )
  if(err) return <p>No Pokemon To Eat....</p>

  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={1} className={classes.root}>
          {pokemonsList.map((list, index) => {
            return <Pokemon list={list} index={index} key={list.name}/>
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={1} className={classes.pagination}>
          <Pagination size="large" count={20} page={page} variant="outlined" color="secondary" onChange={(event, value) => handlePage(event, value)} />
        </Grid>
      </Grid>
    </div>
  )
}
