// src/redux/sagas/index.ts
import { all } from 'redux-saga/effects';
import movieSaga from './movieSaga'; 
import tvSaga from './tvSaga';
import onAirSaga from './onAirSaga';
import topRatedSaga from './topRatedSaga';
import searchSaga from './searchSaga';

export default function* rootSaga(): Generator {
  yield all([
   movieSaga(), 
    tvSaga(),
    onAirSaga(),
    topRatedSaga(),
    searchSaga()
  ]);
}
