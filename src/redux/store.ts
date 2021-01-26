import thunk from 'redux-thunk';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import featuredProductsListReducer from 'redux/featuredProductsList/featuredProductsListReducer';
import languageReducer from 'redux/language/languageReducer';

const rootReducer = combineReducers({
  languageReducer,
  featuredProductsListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export default store;
