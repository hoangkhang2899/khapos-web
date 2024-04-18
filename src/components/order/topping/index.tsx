import { Button, Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";
import { TProduct } from "../product/productSlice";

export type OrderToppingComponentRef = {
  show(product: TProduct): void;
};

type Props = {};

export const OrderToppingComponent = forwardRef<
  OrderToppingComponentRef,
  Props
>(({}, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState<TProduct>();

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
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={product?.name}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width="50%"
    >
      <div className="flex flex-col">
        <div>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </div>
        <div className="self-center">
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
        </div>
      </div>
    </Modal>
  );
});
OrderToppingComponent.displayName = "OrderToppingComponent";
