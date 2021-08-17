import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// reducers
import testReducer from './test/test.store'

const store = configureStore({
  reducer:{
    test: testReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store