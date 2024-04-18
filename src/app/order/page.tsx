"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, InputRef } from "antd";
import avatar from "@/assets/common/avatar.webp";
import category_coffe from "@/assets/common/category_coffee.png";
import category_milktea from "@/assets/common/category_milktea.png";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { OrderBillComponent } from "@/components/order/bill";
import { OrderProductComponent } from "@/components/order/product";

export default function OrderPage() {
  const searchRef = useRef<InputRef>(null!);
  useEffect(() => {
    const focusSearch = (e: KeyboardEvent) => {
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
        <OrderProductComponent />
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
        <OrderBillComponent />
      </div>
    </div>
  );
}
