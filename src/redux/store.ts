// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers'; // Import the root reducer
import rootSaga from './sagas'; // Import the root saga
import { all } from 'redux-saga/effects';
import rootReducer from './reducer/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

function* runSaga() {
  yield all([rootSaga()]);
}

sagaMiddleware.run(runSaga);

export default store;
