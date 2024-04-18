import { Button } from "antd";
import product_1 from "@/assets/product/1-done.jpg";
import Image from "next/image";
import { numberFormat } from "@/utils/number";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { TProduct } from "./productSlice";
import { TBill, addBill } from "../bill/billSlice";
import { OrderToppingComponent, OrderToppingComponentRef } from "../topping";
import { useRef } from "react";

export const OrderProductComponent = () => {
  const toppingRef = useRef<OrderToppingComponentRef>(null);
  const products = useAppSelector((state) => state.productsReducer.products);
  const toppings = useAppSelector((state) => state.toppingReducer.toppings);
  const dispatch = useAppDispatch();

  const handleAddToBill = (product: TProduct) => {
    // const bill: TBill = {
    //   product,
    //   quantity: 1,
    //   toppings: [
    //     {
    //       topping: toppings[0],
    //       quantity: 1,
    //     },
    //   ],
    //   totalPrice: (toppings[0].price * 1 + product.price) * 1,
    // };
    // dispatch(addBill(bill));
    toppingRef.current?.show(product);
  };
  return (
    <>
      <OrderToppingComponent ref={toppingRef} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-5">
        {products.map((v, i) => (
          <div key={`product-${i}`} className="rounded-lg bg-white p-5">
            <div className={`grid grid-cols-[40%_1fr] gap-x-5`} title={v.name}>
              <div className="row-span-2 self-start">
                <Image
                  sizes="100vw"
                  className="rounded-xl"
                  src={product_1}
                  alt={v.name}
                />
              </div>
              <p className="line-clamp-2 self-center font-medium">{v.name}</p>
              <p className="self-end text-lg font-semibold">
                {numberFormat(v.price)}
              </p>
              <Button
                type="primary"
                className="col-span-2 mt-8 h-12 w-full self-end rounded-full font-bold"
                onClick={() => handleAddToBill(v)}
              >
                Thêm
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
