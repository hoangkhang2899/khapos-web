import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TProduct = {
  id: number;
  name: string;
  price: number;
};

export type ProductsState = {
  products: TProduct[];
};

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
