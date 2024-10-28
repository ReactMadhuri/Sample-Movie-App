// src/redux/actions.ts
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => (
  {
  
  type: FETCH_MOVIES_REQUEST,
}
);

export const FETCH_TV_REQUEST = 'FETCH_TV_REQUEST';
export const FETCH_TV_SUCCESS = 'FETCH_TV_SUCCESS';
export const FETCH_TV_FAILURE = 'FETCH_TV_FAILURE';

export const fetchTvRequest = () => (
  {
  
  type: FETCH_TV_REQUEST,
}
);


export const FETCH_ON_AIR_REQUEST = 'FETCH_ON_AIR_REQUEST';
export const FETCH_ON_AIR_SUCCESS = 'FETCH_ON_AIR_SUCCESS';
export const FETCH_ON_AIR_FAILURE = 'FETCH_ON_AIR_FAILURE';

export const fetchOnAirRequest = () => (
  {
  
  type: FETCH_ON_AIR_REQUEST,
}
);

export const FETCH_TOP_RATED_REQUEST = 'FETCH_TOP_RATED_REQUEST';
export const FETCH_TOP_RATED_SUCCESS = 'FETCH_TOP_RATED_SUCCESS';
export const FETCH_TOP_RATED_FAILURE = 'FETCH_TOP_RATED_FAILURE';
export const fetchTopRatedRequest = () => (
  {
  
  type: FETCH_TOP_RATED_REQUEST,
}
);


export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMoviesRequest = (query: string) => ({
  type: SEARCH_MOVIES_REQUEST,
  payload: query,
});

export const searchMoviesSuccess = (movies: any[]) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

export const searchMoviesFailure = (error: string) => ({
  type: SEARCH_MOVIES_FAILURE,
  payload: error,
});