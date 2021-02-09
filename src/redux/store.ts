import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { middlewares } from 'redux/middlewares';
import reducers from 'redux/slices';

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root', // namespace
  storage,
  whitelist: [
    // save all
    'userLoginReducer',
  ],
  // blacklist: [] // alternative to whitelist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ...middlewares,
  ],
  devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default {
  store,
  persistor,
};
