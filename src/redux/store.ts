import thunk from 'redux-thunk';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import featuredProductsListReducer from 'redux/featuredProductsList/featuredProductsListReducer';
import languageReducer from 'redux/language/languageReducer';
import { middlewares } from 'middlewares';

const rootReducer = combineReducers({
  languageReducer,
  featuredProductsListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, ...middlewares));

export type RootState = ReturnType<typeof store.getState>;

export default store;
