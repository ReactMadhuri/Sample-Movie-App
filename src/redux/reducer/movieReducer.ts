import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_FAILURE 
} from '../actions';

const initialState = {
  popularMovies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action: { type: any; payload: { popularMovies: any; }; }) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIES_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        popularMovies: action.payload.popularMovies,
        error: null
      };
    case FETCH_MOVIES_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };
    default:
      return state;
  }
};

export default movieReducer;
