import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface CartValue {
  id: string;
  size: string;
  color: string;
  qty: number;
  price: number;
  product_name: string;
}

const initialState = {
  value: [] as CartValue[],
  status: "idle",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addCart: (state, action) => {
      const index = state.value.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (index !== -1) {
        state.value[index].qty += action.payload.qty;
      } else {
        state.value.push(action.payload);
      }
    },
  },
});

export const { addCart } = CartSlice.actions;

export const selectCart = (state: RootState) => state.cart.value;

export default CartSlice.reducer;
