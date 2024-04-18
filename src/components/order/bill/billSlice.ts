import { TProduct } from "@/components/order/product/productSlice";
import { TTopping } from "@/components/order/topping/toppingSlice";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TBill = {
  product: TProduct;
  toppings: {
    topping: TTopping;
    quantity: number;
  }[];
  quantity: number;
  totalPrice: number;
};

export type BillState = {
  bills: TBill[];
};

const initialState: BillState = {
  bills: [],
};

export const billSlice = createSlice({
  name: "Bill",
  initialState,
  reducers: {
    addBill: (state, action: PayloadAction<TBill>) => {
      state.bills.push(action.payload);
    },
  },
});

export const { addBill } = billSlice.actions;

export const billReducer = billSlice.reducer;
