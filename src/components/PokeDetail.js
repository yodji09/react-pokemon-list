import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,
        CardContent,
        CardMedia,
        Typography
} from '@material-ui/core';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import {useSelector, useDispatch} from 'react-redux';
import { fetchDataDetail } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: 10,
    marginTop: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function PokeDetail() {
  const {id} = useParams()
  const abilities = useSelector((state) => state.abilities)
  const data = useSelector((state) => state.detail)
  const loading = useSelector((state) => state.loading)
  const err = useSelector((state) => state.err)
  const classes = useStyles();
  const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataDetail(`pokemon/${id}`))
  }, [id, dispatch])

  if(loading) return (
    <Loading loading={loading}></Loading>
  )
  if(err) return <p>No Pokemon To Eat....</p>

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {data.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Ability:
            {abilities.map((ability, index) => {
              return ( <Typography key={index}>
              {ability.ability.name}
              </Typography> )
            })}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={url}
        title="Live from space album cover"
      />
    </Card>
  );
}