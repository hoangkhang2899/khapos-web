import { produce } from "immer";
import { TProduct } from "../product/productSlice";

type State = {
  isOpen: boolean;
  product?: TProduct;
  count: number;
  toppingCount: number[];
};

type Action =
  | {
      type: "open";
    }
  | {
      type: "close";
    }
  | {
      type: "product";
      product: TProduct;
    }
  | {
      type: "product_plus";
    }
  | {
      type: "product_minus";
    }
  | {
      type: "topping_plus";
      index: number;
    }
  | {
      type: "topping_minus";
      index: number;
    };

export const orderToppingInitState: State = {
  isOpen: false,
  count: 0,
  toppingCount: [],
};

export const orderToppingReducer = produce((state: State, action: Action) => {
  switch (action.type) {
    case "open":
      state.isOpen = true;
      break;
    case "close":
      return orderToppingInitState;
    case "product":
      state.product = action.product;
      break;
    case "product_plus":
      state.count += 1;
      break;
    case "product_minus":
      state.count = state.count > 0 ? state.count - 1 : 0;
      break;
    case "topping_plus":
      if (state.toppingCount[action.index]) {
        state.toppingCount[action.index] += 1;
      } else {
        state.toppingCount[action.index] = 1;
      }
      break;
    case "topping_minus":
      if (state.toppingCount[action.index]) {
        state.toppingCount[action.index] -= 1;
      } else {
        state.toppingCount[action.index] = 0;
      }
      break;
    default:
      break;
  }
});
