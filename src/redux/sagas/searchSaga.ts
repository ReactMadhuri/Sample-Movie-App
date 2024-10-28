import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { SEARCH_MOVIES_REQUEST, searchMoviesSuccess, searchMoviesFailure } from '../actions';
import { SEARCH_MOVIE_URL } from '../../services/urls';

function* fetchMovies(action: any) {
  try {
    const response = yield call(axios.get, `${SEARCH_MOVIE_URL}${action.payload}`);
    yield put(searchMoviesSuccess(response.data.results));
  } catch (error: any) {
    yield put(searchMoviesFailure(error.message));
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, fetchMovies);
}
