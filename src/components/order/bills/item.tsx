import Image from "next/image";
import product_1 from "../../../assets/product/1-done.jpg";
import { Button } from "antd";

export const OrderBillsItem = () => {
  return (
    <div className="grid grid-cols-[repeat(2,max-content)_1fr_max-content] gap-x-2 gap-y-1">
      <div className="row-span-2 self-start p-2 text-lg font-semibold">1x</div>
      <p className="col-span-2">Sữa tươi trân châu đường đen</p>
      <p className="justify-self-end">200.00</p>
      <div className="grid grid-cols-[max-content_1fr] gap-x-2 text-sm">
        <p>1x</p>
        <p>Pudding trứng</p>
        <p>2x</p>
        <p>Trân châu trắng</p>
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
  );
};
