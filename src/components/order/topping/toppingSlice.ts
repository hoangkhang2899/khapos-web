import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TTopping = {
  id: number;
  name: string;
  price: number;
};

export type ToppingState = {
  toppings: TTopping[];
};

const initialState: ToppingState = {
  toppings: [
    {
      id: 1,
      name: "Trân châu đen",
      price: 5000,
    },
    {
      id: 2,
      name: "Trân châu trắng",
      price: 5000,
    },
    {
      id: 3,
      name: "Bánh flan",
      price: 8000,
    },
  ],
};

export const toppingSlice = createSlice({
  name: "Topping",
  initialState,
  reducers: {},
});

// export const { addProduct } = toppingSlice.actions;

export const toppingReducer = toppingSlice.reducer;
