import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { middlewares } from 'middlewares';
import { FeaturedProductsListSlice } from 'redux/slices/featuredProductsList';
import { ChangeLanguageSlice } from 'redux/slices/language';
import { SingleProductDetailsSlice } from 'redux/slices/singleProductDetails';

const rootReducer = combineReducers({
  featuredProductsListReducer: FeaturedProductsListSlice.reducer,
  singleProductReducer: SingleProductDetailsSlice.reducer,
  languageReducer: ChangeLanguageSlice.reducer,
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
