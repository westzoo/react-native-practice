import {combineReducers} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import {GAME, gameReducer} from './gameSlice';

import gameSaga from './gameSaga';

const createRootReducer = history =>
  combineReducers({
    [GAME]: gameReducer,
  });

const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([gameSaga()]);
// }

export default function createStore() {
  const store = configureStore({
    reducer: createRootReducer(),
    devTools: true,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({serializableCheck: false}),
      sagaMiddleware,
    ],
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
