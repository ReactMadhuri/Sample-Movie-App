import { 
    SEARCH_MOVIES_REQUEST, 
    SEARCH_MOVIES_SUCCESS, 
    SEARCH_MOVIES_FAILURE 
  } from '../actions';
  
  const initialState = {
    movies: [],
    loading: false,
    error: null,
  };
  
  const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SEARCH_MOVIES_REQUEST:
        return { ...state, loading: true, error: null };
      case SEARCH_MOVIES_SUCCESS:
        return { ...state, loading: false, movies: action.payload };
      case SEARCH_MOVIES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  