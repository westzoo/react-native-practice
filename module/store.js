import {combineReducers} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {GAME, gameReducer} from './gameSlice';

const createRootReducer = history =>
  combineReducers({
    [GAME]: gameReducer,
  });

const sagaMiddleware = createSagaMiddleware();

export default function createStore() {
  const store = configureStore({
    reducer: createRootReducer(),
    devTools: true,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({serializableCheck: false}),
      sagaMiddleware,
    ],
  });

  return store;
}
