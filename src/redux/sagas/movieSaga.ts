import { call, put, takeLatest } from 'redux-saga/effects';
import { 
  fetchPopularMovies, 
} from '../../services/api';
import { 
  FETCH_MOVIES_REQUEST, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_FAILURE 
} from '../actions';

function* fetchMovies():any{
  try {
    const popularMoviesResponse = yield call(fetchPopularMovies);

    yield put({ 
      type: FETCH_MOVIES_SUCCESS, 
      payload: { 
        popularMovies: popularMoviesResponse.data.results,
      } 
    });
  } catch (error:any) {
    yield put({ type: FETCH_MOVIES_FAILURE, payload: error.message || 'Something went wrong' });
  }
}

export default function* movieSaga() {
  yield takeLatest(FETCH_MOVIES_REQUEST, fetchMovies);
}
