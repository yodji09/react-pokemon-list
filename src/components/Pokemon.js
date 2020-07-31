import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,
        CardActionArea,
        CardActions,
        CardContent,
        CardMedia,
        Button,
        Typography,
        IconButton
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useDispatch} from 'react-redux';
import { addFavorites } from '../store/actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    padding: 10,
    margin: 10,
    boxShadow: '0 5px 7px 2px rgba(255, 105, 135, .3)'
  },
  media: {
    margin: 'auto',
    display: 'block',
    maxHeight: '100%',
  },
  bgc: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
});

export default function Pokemon (props) {
  const {list} = props;
  const urlArray = list.url.split('/');
  const id = urlArray[urlArray.length-2];
  const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  const idParams = `/${id}`;
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleAddFavorite(event, value) {
    value.favorites = true;
    event.preventDefault();
    dispatch(addFavorites(value));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={url}
        />
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="h5" component="h2">
            {list.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.bgc}>
        <Button size="small">
          <Link className="link" to={idParams}>
            Poke Detail
          </Link>
        </Button>
        {!list.favorites &&
          <IconButton aria-label="add to favorites" onClick={(event) => {handleAddFavorite(event, list)}}>
            <FavoriteIcon />
          </IconButton>
        }
      </CardActions>
    </Card>
  )
}