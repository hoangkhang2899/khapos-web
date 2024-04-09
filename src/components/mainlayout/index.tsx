import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "/", <PieChartOutlined />),
  getItem("Order", "/order", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

type Prop = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Prop) => {
  const router = useRouter();
  return (
    <Layout>
      <Sider collapsed={true} style={{ backgroundColor: "white" }}>
        <Menu
          // theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(e) => {
            console.log(e);
            router.push(e.key);
          }}
        />
      </Sider>
      <Content className="h-screen overflow-auto">{children}</Content>
    </Layout>
  );
};
