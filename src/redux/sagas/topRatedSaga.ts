// sagas/topRatedSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTopRatedTV } from '../../services/api'; // Ensure this API function exists
import { 
  FETCH_TOP_RATED_REQUEST, 
  FETCH_TOP_RATED_SUCCESS, 
  FETCH_TOP_RATED_FAILURE 
} from '../actions';

function* fetchTopRated(): any {
  try {
    const topRatedTVResponse = yield call(fetchTopRatedTV);
    
    yield put({
      type: FETCH_TOP_RATED_SUCCESS,
      payload: {
        topRated: topRatedTVResponse.data.results,  // Assuming the response structure
      },
    });
  } catch (error: any) {
    yield put({
      type: FETCH_TOP_RATED_FAILURE,
      payload: error?.message || 'Something went wrong',
    });
  }
}

export default function* topRatedSaga() {
  yield takeLatest(FETCH_TOP_RATED_REQUEST, fetchTopRated);
}

