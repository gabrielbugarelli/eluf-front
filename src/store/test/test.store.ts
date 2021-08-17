import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const test = createSlice({
  name:'test',
  initialState:{
    counter:0,
  },
  reducers:{
    increment(state){
      state.counter += 1
    }
  }
})

export const {increment} = test.actions
export default test.reducer