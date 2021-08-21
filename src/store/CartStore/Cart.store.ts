import { createSlice, EmptyObject, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../index';


export interface DataStore {
  id:number,
  couter: number,
  name: string,
  image: string,
  price: number,
  description: string ,
  category:string,
  setCouter:Function
}

type InitialState = DataStore[]

const cart = createSlice({
  name: "cart",
  initialState: [] as InitialState,
  reducers: {
    AddCart(state, action: PayloadAction<DataStore>) {
      state.push(action.payload);
    },
  },
});

export const {AddCart} = cart.actions
export default cart.reducer;