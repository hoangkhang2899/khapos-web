import { Button, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { TProduct } from "../product/productSlice";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/hooks/redux";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [toppingCount, setToppingCount] = useState<number[]>([]);
  const [product, setProduct] = useState<TProduct>();
  const toppings = useAppSelector((state) => state.toppingReducer.toppings);

  useImperativeHandle(
    ref,
    () => ({
      show: (_product) => {
        setProduct(_product);
        showModal();
      },
    }),
    [],
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    onOk();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePlusClick = () => {
    setProductCount((state) => state + 1);
  };

  const handleMinusClick = () => {
    setProductCount((state) => state - 1);
  };

  const handlePlusTopping = (index: number) => {
    setToppingCount((state) => {
      if (state[index]) {
        state[index] += 1;
      } else {
        state[index] = 1;
      }
      console.log(state);
      return state;
    });
  };

  const handleMinusTopping = (index: number) => {
    setToppingCount((state) => {
      if (state[index]) {
        state[index] -= 1;
      } else {
        state[index] = 0;
      }
      return state;
    });
  };

  return (
    <Modal
      title={product?.name}
      open={isModalOpen}
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
                  onClick={() => handlePlusTopping(i)}
                />
                <div className="inline-block w-6 text-center">
                  {toppingCount[i] ?? 0}
                </div>
                <Button
                  size="small"
                  shape="circle"
                  icon={<MinusOutlined />}
                  onClick={() => handleMinusTopping(i)}
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
            onClick={handlePlusClick}
          />
          <div className="inline-block w-10 text-center text-lg font-semibold text-primary-500">
            {productCount}
          </div>
          <Button
            shape="circle"
            icon={<MinusOutlined />}
            onClick={handleMinusClick}
          />
        </div>
      </div>
    </Modal>
  );
});
OrderToppingComponent.displayName = "OrderToppingComponent";
