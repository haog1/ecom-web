import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { middlewares } from 'middlewares';
import { applyMiddleware, createStore } from 'redux';
import featuredProductsListReducer from 'redux/featuredProductsList/featuredProductsListReducer';
import languageReducer from 'redux/language/languageReducer';
import { SingleProductDetailsSlice } from 'redux/singleProductDetails/slice';

const rootReducer = combineReducers({
  languageReducer,
  featuredProductsListReducer,
  singleProductReducer: SingleProductDetailsSlice.reducer,
});

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
