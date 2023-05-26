import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

//record in the storage of an array of carts
const persistedReducer = persistReducer(
  {
    key: 'cart',
    storage,
    whitelist: ['cart'],
  },
  combineReducers(reducer)
);

//redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//redux persist store
export const persistor = persistStore(store);
