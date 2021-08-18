import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCart } from './../../components/ModalHome/ModalHome';


interface DataStore {
  dataStore:addCart
}

const cart = createSlice({
  name: "cart",
  initialState:{
    data:[{}],
  },
  reducers: {
    AddCart(state, action: PayloadAction<DataStore>) {
      state.data.push(action.payload.dataStore); 
    },
  },
});

export const {AddCart} = cart.actions
export default cart.reducer;