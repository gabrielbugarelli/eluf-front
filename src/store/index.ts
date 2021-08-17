import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import test from './test/test.store';

// redux persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

// reducers
import testReducer from './test/test.store'

// persistconfig - persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// persist reducer
const testPersisted = persistReducer(persistConfig, test);

const store = configureStore({
  reducer: {
    test:testPersisted
  },
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export default store