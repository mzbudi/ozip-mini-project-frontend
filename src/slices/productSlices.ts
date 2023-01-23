import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { getProduct } from "./api/productsApi";

export const getProductById = createAsyncThunk(
  "product/getProduct",
  async (id: string) => {
    const response = await getProduct(id);
    return response.data;
  }
);

const initialState = {
  value: {
    _id: "",
    product_name: "",
    price: 0,
    variant: [],
    colors: [],
    total_stars: 0,
    total_rated: 0,
    description: "",
  },
  status: "idle",
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getProductById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProduct = (state: RootState) => state.product.value;

export default ProductSlice.reducer;
