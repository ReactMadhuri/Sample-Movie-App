// reducers/topRatedReducer.ts
import { 
    FETCH_TOP_RATED_REQUEST, 
    FETCH_TOP_RATED_SUCCESS, 
    FETCH_TOP_RATED_FAILURE 
  } from '../actions';
  
  const initialState = {
    topRated: [],
    loadingTopRated: false,
    errorTopRated: null,
  };
  
  const topRatedReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case FETCH_TOP_RATED_REQUEST:
        return { ...state, loadingTopRated: true, errorTopRated: null };
      case FETCH_TOP_RATED_SUCCESS:
        return { 
          ...state, 
          loadingTopRated: false, 
          topRated: action.payload.topRated,
          errorTopRated: null
        };
      case FETCH_TOP_RATED_FAILURE:
        return { 
          ...state, 
          loadingTopRated: false, 
          errorTopRated: action.payload 
        };
      default:
        return state;
    }
  };
  
  export default topRatedReducer;
  