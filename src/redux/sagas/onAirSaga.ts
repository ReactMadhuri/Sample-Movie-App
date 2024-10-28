import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchOnTheAirTV 
} from '../../services/api';
import { 
  FETCH_ON_AIR_REQUEST, 
  FETCH_ON_AIR_SUCCESS, 
  FETCH_ON_AIR_FAILURE 
} from '../actions';

function* fetchOnAir(): any {
  try {

    const onTheAirTVResponse = yield call(fetchOnTheAirTV);
    yield put({
      type: FETCH_ON_AIR_SUCCESS,
      payload: {
        popularOnAir: onTheAirTVResponse.data.results,  
      },
    });
  } catch (error: any) {
    yield put({
      type: FETCH_ON_AIR_FAILURE,
      payload: error?.message || 'Something went wrong', 
    });
  }
}

export default function* onAirSaga() {
  yield takeLatest(FETCH_ON_AIR_REQUEST, fetchOnAir);
}
