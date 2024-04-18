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
  products: [
    {
      id: 1,
      name: "Cà phê 1",
      price: 10000,
    },
    {
      id: 2,
      name: "Sữa tươi trân châu đường đen",
      price: 20000,
    },
    {
      id: 3,
      name: "Hồng trà đào cam xã abc xyz bdc oab you",
      price: 30000,
    },
    {
      id: 4,
      name: "Cà phê 4",
      price: 40000,
    },
    {
      id: 5,
      name: "Cà phê 5",
      price: 50000,
    },
    {
      id: 6,
      name: "Cà phê 6",
      price: 60000,
    },
    {
      id: 7,
      name: "Cà phê 1",
      price: 10000,
    },
    {
      id: 8,
      name: "Sữa tươi trân châu đường đen",
      price: 20000,
    },
    {
      id: 9,
      name: "Hồng trà đào cam xã abc xyz bdc oab you",
      price: 30000,
    },
    {
      id: 10,
      name: "Cà phê 4",
      price: 40000,
    },
    {
      id: 11,
      name: "Cà phê 5",
      price: 50000,
    },
    {
      id: 12,
      name: "Cà phê 6",
      price: 60000,
    },
  ],
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
