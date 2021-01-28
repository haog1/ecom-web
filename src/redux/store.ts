import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { middlewares } from 'redux/middlewares';
import reducers from 'redux/slices';

const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ...middlewares,
  ],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
