import { Button, Modal } from "antd";
import { forwardRef, useImperativeHandle, useReducer, useState } from "react";
import { TProduct } from "../product/productSlice";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/hooks/redux";
import { produce } from "immer";
import { orderToppingInitState, orderToppingReducer } from "./reducer";

export type OrderToppingComponentRef = {
  show(product: TProduct): void;
};

type Props = {
  onOk: () => void;
};

export const OrderToppingComponent = forwardRef<
  OrderToppingComponentRef,
  Props
>(({ onOk }, ref) => {
  console.log("render");
  const [state, dispatch] = useReducer(
    orderToppingReducer,
    orderToppingInitState,
  );
  const toppings = useAppSelector((state) => state.toppingReducer.toppings);

  useImperativeHandle(
    ref,
    () => ({
      show: (_product) => {
        dispatch({ type: "product", product: _product });
        dispatch({ type: "open" });
      },
    }),
    [],
  );

  const handleOk = () => {
    dispatch({ type: "close" });
    onOk();
  };

  const handleCancel = () => {
    dispatch({ type: "close" });
  };

  return (
    <Modal
      title={state.product?.name}
      open={state.isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width="50%"
    >
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-2">
          {toppings.map((v, i) => (
            <div key={`topping-${i}`} className="flex gap-x-2">
              <div>
                <Button
                  size="small"
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={() => dispatch({ type: "topping_plus", index: i })}
                />
                <div className="inline-block w-6 text-center">
                  {state.toppingCount[i] ?? 0}
                </div>
                <Button
                  size="small"
                  shape="circle"
                  icon={<MinusOutlined />}
                  onClick={() => dispatch({ type: "topping_minus", index: i })}
                />
              </div>
              <p>{v.name}</p>
            </div>
          ))}
        </div>
        <div className="self-center">
          <Button
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => dispatch({ type: "product_plus" })}
          />
          <div className="inline-block w-10 text-center text-lg font-semibold text-primary-500">
            {state.count}
          </div>
          <Button
            shape="circle"
            icon={<MinusOutlined />}
            onClick={() => dispatch({ type: "product_minus" })}
          />
        </div>
      </div>
    </Modal>
  );
});
OrderToppingComponent.displayName = "OrderToppingComponent";
