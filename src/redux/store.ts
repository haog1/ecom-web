import { createStore, combineReducers } from 'redux';

import languageReducer from 'redux/language/languageReducer';
import featuredProductsListReducer from 'redux/featuredProductsList/featuredProductsListReducer';

const rootReducer = combineReducers({
  languageReducer,
  featuredProductsListReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
