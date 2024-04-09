"use client";

import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { theme } from "@/constants/antd/theme";
import { Provider } from "react-redux";
import { store } from "@/store";
import { MainLayout } from "@/components/mainlayout";

const font = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <body className={font.className}>
            <MainLayout>{children}</MainLayout>
          </body>
        </ConfigProvider>
      </Provider>
    </html>
  );
}
