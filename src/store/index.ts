import { billReducer } from "@/components/order/bill/billSlice";
import { productsReducer } from "@/components/order/product/productSlice";
import { toppingReducer } from "@/components/order/topping/toppingSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    productsReducer,
    toppingReducer,
    billReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
