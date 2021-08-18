import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// reducers
import testReducer from './test/test.store'
import CartReducer from "./CartStore/Cart.store";

// redux persist
// import { persistStore,persistReducer } from 'redux-persist'
// import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";


// persistconfig - persist
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// persist reducer
// const testPersisted = persistReducer(persistConfig, testReducer);

const store = configureStore({
  reducer: {
    // test:testPersisted,
    cart:CartReducer
  },
});

// export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export default store