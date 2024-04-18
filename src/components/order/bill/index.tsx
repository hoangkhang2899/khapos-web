import { useAppSelector } from "@/hooks/redux";
import { numberFormat } from "@/utils/number";
import { Button } from "antd";
import { Fragment } from "react";

export const OrderBillComponent = () => {
  const bills = useAppSelector((state) => state.billReducer.bills);
  const total = bills.reduce((p, c) => p + c.totalPrice, 0);
  return (
    <div className="flex grow flex-col gap-4 overflow-hidden p-5">
      <p className="text-2xl font-bold">Bills</p>
      <div className="-mr-5 flex grow flex-col gap-4 overflow-auto pr-5">
        {bills.map((v, i) => (
          <div
            key={`bill-${i}`}
            className="grid grid-cols-[repeat(2,max-content)_1fr_max-content] gap-x-2 gap-y-1"
          >
            <div className="row-span-2 self-start p-2 text-lg font-semibold">
              {v.quantity}x
            </div>
            <p className="col-span-2">{v.product.name}</p>
            <p className="justify-self-end">{numberFormat(v.totalPrice)}</p>
            <div className="grid grid-cols-[max-content_1fr] gap-x-2 text-sm">
              {v.toppings.map((v1, i1) => (
                <Fragment key={`bill-${i}-topping-${i1}`}>
                  <p>{v1.quantity}x</p>
                  <p>{v1.topping.name}</p>
                </Fragment>
              ))}
            </div>
            {/* <div className="justify-self-end">
        <Button type="primary">Chỉnh sửa</Button>
      </div>
      <div className="">
        <Button type="primary" danger>
          Xoá
        </Button>
      </div> */}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-4 gap-y-1 font-medium">
        <p>Tổng:</p>
        <p className="justify-self-end">{numberFormat(total)}</p>
        <p>Giảm giá:</p>
        <p className="justify-self-end">{numberFormat(0)}</p>
        <div className="relative col-span-2 after:absolute after:h-full after:w-full after:translate-y-2/4 after:border-t-2 after:border-dashed"></div>
        <p>Tổng thanh toán:</p>
        <p className="justify-self-end">{numberFormat(total)}</p>
      </div>
      <div>
        <Button type="primary" className="h-12 w-full rounded-full font-bold">
          Thanh toán
        </Button>
      </div>
    </div>
  );
};
