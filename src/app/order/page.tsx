"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, InputRef } from "antd";
import avatar from "../../assets/common/avatar.webp";
import category_coffe from "../../assets/common/category_coffee.png";
import category_milktea from "../../assets/common/category_milktea.png";
import product_1 from "../../assets/product/1-done.jpg";
import { useEffect, useRef } from "react";
import { products } from "./product-test";
import Image from "next/image";
import { numberFormat } from "@/utils/number";
import { OrderBillsItem } from "@/components/order/bills/item";

export default function OrderPage() {
  const searchRef = useRef<InputRef>(null!);
  useEffect(() => {
    const focusSearch = (e: KeyboardEvent) => {
      console.log(e.target);
      if (
        !(e.target as HTMLElement).isSameNode(searchRef.current.input) &&
        e.key === " "
      ) {
        setTimeout(() => {
          searchRef.current.focus();
        }, 0);
      }
    };
    document.addEventListener("keydown", focusSearch);
    return () => {
      document.removeEventListener("keydown", focusSearch);
    };
  }, []);
  return (
    <div className="flex h-full">
      <div className="grow overflow-auto p-5">
        <div className="flex items-center justify-between">
          <p
            className="line-clamp-1 h-fit cursor-pointer text-xl font-bold"
            title="Dogi Milktea"
          >
            Dogi Milktea
          </p>
          <Input
            ref={searchRef}
            className="w-1/2 text-sm"
            size="large"
            placeholder="Tìm kiếm (Space)"
            prefix={
              <div className="mr-2">
                <SearchOutlined />
              </div>
            }
          />
        </div>
        <div className="-mx-5 my-7 flex gap-7 overflow-x-auto px-5 py-3">
          {[
            "All menu",
            "Coffee",
            "Trà sữa",
            "Nước ngọt đóng chai",
            "Nước ngọt đóng chai",
            "Nước ngọt đóng chai",
            "Nước ngọt đóng chai",
            "Nước ngọt đóng chai",
          ].map((v, i) => {
            return (
              <div
                key={`category-${i}`}
                title={v}
                className={`${
                  i == 2 ? "active" : ""
                } group flex w-28 flex-shrink-0 cursor-pointer flex-col justify-between rounded-2xl border border-neutral-400 bg-white p-5 font-medium text-neutral-400 hover:border-primary-500 [&.active]:border-primary-500 [&.active]:bg-primary-100`}
              >
                <div>
                  <Image
                    sizes="100vw"
                    src={i == 2 ? category_milktea : category_coffe}
                    alt="Category"
                  />
                </div>
                <p className="line-clamp-2 text-center text-sm group-hover:text-orange-800 group-[&.active]:text-orange-800">
                  {v}
                </p>
              </div>
            );
          })}
        </div>
        <div className="my-5 flex justify-between">
          <p className="text-xl font-bold">Trà sữa</p>
          <p className="text-neutral-400">13 sản phẩm</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-5">
          {products.map((v, i) => (
            <div key={`product-${i}`} className="rounded-lg bg-white p-5">
              <div
                className={`grid grid-cols-[40%_1fr] gap-x-5`}
                title={v.name}
              >
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
                >
                  Thêm
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-96 flex-[0_0_auto] flex-col overflow-hidden bg-white">
        <div className="flex h-24 items-center gap-3 px-9 py-5 shadow-[0px_0px_100px_0px_#8080803b]">
          <div className="h-full">
            <Image
              sizes="100vw"
              className="h-full w-full rounded-lg"
              src={avatar}
              alt="Avatar"
            />
          </div>
          <div className="flex-auto">
            <div className="text-gray-500">Admin</div>
            <div className="line-clamp-1 text-lg font-bold tracking-tight">
              Le Hoang Khang
            </div>
          </div>
        </div>
        <div className="flex grow flex-col gap-4 overflow-hidden p-5">
          <p className="text-2xl font-bold">Bills</p>
          <div className="-mr-5 flex grow flex-col gap-4 overflow-auto pr-5">
            <OrderBillsItem></OrderBillsItem>
            <OrderBillsItem></OrderBillsItem>
            <OrderBillsItem></OrderBillsItem>
            <OrderBillsItem></OrderBillsItem>
            <OrderBillsItem></OrderBillsItem>
            <OrderBillsItem></OrderBillsItem>
          </div>
          <div className="grid grid-cols-2 grid-rows-4 gap-y-1 font-medium">
            <p>Tổng:</p>
            <p className="justify-self-end">200.00</p>
            <p>Giảm giá:</p>
            <p className="justify-self-end">10.00</p>
            <div className="relative col-span-2 after:absolute after:h-full after:w-full after:translate-y-2/4 after:border-t-2 after:border-dashed"></div>
            <p>Tổng thanh toán:</p>
            <p className="justify-self-end">190.00</p>
          </div>
          <div>
            <Button
              type="primary"
              className="h-12 w-full rounded-full font-bold"
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
