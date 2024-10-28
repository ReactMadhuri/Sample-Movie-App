import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchPopularTV, 
  fetchOnTheAirTV 
} from '../../services/api';
import { 
  FETCH_TV_REQUEST, 
  FETCH_TV_SUCCESS, 
  FETCH_TV_FAILURE 
} from '../actions';

function* fetchTv(): any {
  try {
    const popularTVResponse = yield call(fetchPopularTV);
    
    yield put({
      type: FETCH_TV_SUCCESS,
      payload: {
        popularTV: popularTVResponse.data.results,
      },
    });
  } catch (error: any) {
    yield put({
      type: FETCH_TV_FAILURE,
      payload: error.message || 'Something went wrong',
    });
  }
}

export default function* tvSaga() {
  yield takeLatest(FETCH_TV_REQUEST, fetchTv);
}
