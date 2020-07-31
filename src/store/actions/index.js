import axios from 'axios';
const SET_LOADING = "SET_LOADING";
const SET_DETAIL = "SET_DETAIL";
const SET_DATA = "SET_DATA";
const SET_ABILITIES = "SET_ABILITIES";
const SET_ERR = "SET_ERR";
const ADD_FAVORITE = "ADD_FAVORITE";
const SET_PAGE = "SET_PAGE";
const SET_SEARCH = "SET_SEARCH";

export const setSearch = search => {
  return {
    type: SET_SEARCH,
    payload: search
  }
}

export const setPage = page => {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    payload: loading
  };
};

export const setDetail = detail => {
  return {
    type: SET_DETAIL,
    payload: detail
  };
};

export const setError = error => {
  return {
    type: SET_ERR,
    payload: error
  };
};

export const setData = data => {
  return {
    type: SET_DATA,
    payload: data
  };
};

export const setAbilities = abilities => {
  return {
    type: SET_ABILITIES,
    payload: abilities
  };
};

export const addFavorites = favorite => {
  return {
    type: ADD_FAVORITE,
    payload: favorite
  };
};

export const fetchData = urlextend => {
  const baseUrl = 'https://pokeapi.co/api/v2/'
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const asyncResponse = await axios({
        method: 'GET',
        url: baseUrl + urlextend
      })
      const data = asyncResponse.data
      dispatch(setData(data.results))
    } catch (err) {
      dispatch(setError(err))
    }
    dispatch(setLoading(false))
  }
}

export const fetchDataDetail = urlextend => {
  const baseUrl = 'https://pokeapi.co/api/v2/'
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const asyncResponse = await axios({
        method: 'GET',
        url: baseUrl + urlextend
      })
      const data = asyncResponse.data
      dispatch(setAbilities(data.abilities))
      dispatch(setDetail(data))
    } catch (err) {
      dispatch(setError(err))
    }
    dispatch(setLoading(false))
  }
}