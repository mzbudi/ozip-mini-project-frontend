import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlices";
import authReducer from "../slices/authSlices";
import productReducer from "../slices/productSlices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
