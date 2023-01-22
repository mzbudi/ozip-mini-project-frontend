import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface CartValue {
  id: string;
  size: string;
  color: string;
  qty: number;
  price: number;
  name: string;
}

interface CartState {
  value: {
    [key: string]: CartValue;
  };

  status: "idle" | "loading" | "failed";
}

const initialState: CartState = {
  value: {},
  status: "idle",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addCart: (state, action) => {
      state.value[action.payload.id] = action.payload;
    },
  },
});

export const { addCart } = CartSlice.actions;

export const selectCart = (state: RootState) => state.cart.value;

export default CartSlice.reducer;
