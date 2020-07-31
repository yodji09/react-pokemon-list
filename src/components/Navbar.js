import React, {useCallback} from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
import {AppBar,
        Toolbar,
        Typography,
        IconButton,
        InputBase} from '@material-ui/core';
import {Favorite as FavoriteIcon,
        Home as HomeIcon,
        Search as SearchIcon
} from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setSearch } from '../store/actions';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    paddingBot: '10',
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    textAlign: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  function getFavourites(event){
    event.preventDefault();
    history.push("/favourite");
  };
  function getHome(event) {
    event.preventDefault();
    history.push("/");
  };
  const handler = useCallback(_.debounce((event) => {
    dispatch(setSearch(event.target.value))
  }, 1000))
  function handleChange(event) {
    console.log(event.target.value)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton onClick={event => getHome(event)}>
            <HomeIcon />
            Eat More
          </IconButton>
          <IconButton onClick={event => getFavourites(event)}>
            <FavoriteIcon />
            Favorite
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Welcome To Poke-Eater
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};