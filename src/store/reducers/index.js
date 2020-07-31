const initialState = {
  data: [],
  abilities: [],
  loading: false,
  err: null,
  detail: {},
  favorites: [],
  page: 1,
  search: ''
};

function reducer(state = initialState, action) {
  const {type, payload} = action;
  if (type === 'SET_LOADING') {
    return {...state, loading:payload};
  } else if (type === 'SET_ERR') {
    return {...state, err: payload};
  } else if (type === 'SET_DATA') {
    return {...state, data: payload};
  } else if (type === 'SET_ABILITIES') {
    return {...state, abilities: payload};
  } else if (type === 'SET_DETAIL') {
    return {...state, detail: payload};
  } else if (type === 'ADD_FAVORITE') {
    const temp = state.favorites;
    temp.push(payload);
    return {...state, favorites: temp};
  } else if (type === 'SET_PAGE') {
    return {...state, page: payload}
  } else if (type === 'SET_SEARCH') {
    return {...state, search: payload}
  }
  return state;
};

export default reducer;