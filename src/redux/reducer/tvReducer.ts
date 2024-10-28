import { 
  FETCH_TV_REQUEST, 
  FETCH_TV_SUCCESS, 
  FETCH_TV_FAILURE 
} from '../actions';

interface TVState {
  popularTv: any[];
  loadingTv: boolean;
  errorTv: string | null;
}

// Define the shape of different action types
interface FetchTVSuccessAction {
  type: typeof FETCH_TV_SUCCESS;
  payload: { popularTV: any[] };
}

interface FetchTVFailureAction {
  type: typeof FETCH_TV_FAILURE;
  payload: string;
}

interface FetchTVRequestAction {
  type: typeof FETCH_TV_REQUEST;
}

type TVAction = FetchTVSuccessAction | FetchTVFailureAction | FetchTVRequestAction;

const initialState: TVState = {
  popularTv: [],
  loadingTv: false,
  errorTv: null,
};

const tvReducer = (state = initialState, action: TVAction): TVState => {
  switch (action.type) {
    case FETCH_TV_REQUEST:
      return { ...state, loadingTv: true, errorTv: null };

    case FETCH_TV_SUCCESS:
      return { 
        ...state, 
        loadingTv: false, 
        popularTv: action.payload.popularTV, 
        errorTv: null 
      };

    case FETCH_TV_FAILURE:
      return { 
        ...state, 
        loadingTv: false, 
        errorTv: action.payload 
      };

    default:
      return state;
  }
};

export default tvReducer;
