import { 
  FETCH_ON_AIR_REQUEST, 
  FETCH_ON_AIR_SUCCESS, 
  FETCH_ON_AIR_FAILURE 
} from '../actions';

const initialState = {
  popularOnAir: [],
  loadingOnAir: false,
  errorOnAir: null,
};

const onAirReducer = (state = initialState, action: { type: any; payload: { popularOnAir: any; }; }) => {
  switch (action.type) {
    case FETCH_ON_AIR_REQUEST:
      return { ...state, loadingOnAir: true, errorOnAir: null };
    case FETCH_ON_AIR_SUCCESS:
      return { 
        ...state, 
        loadingOnAir: false, 
        popularOnAir: action.payload.popularOnAir,
        errorOnAir: null
      };
    case FETCH_ON_AIR_FAILURE:
      return { 
        ...state, 
        loadingOnAir: false, 
        errorOnAir: action.payload 
      };
    default:
      return state;
  }
};

export default onAirReducer;
