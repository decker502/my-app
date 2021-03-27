import React, { FC, useEffect, Suspense, useCallback, useState } from "react";
import { Layout, Drawer } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import ProLayout, {
  PageContainer,
  SettingDrawer
} from "@ant-design/pro-layout";
import { Link } from "react-router-dom";

const LayoutPage = ({ children }) => {
    const location = useLocation();
  const menus = [
    {
      path: "/",
      name: "welcome",
      children: [
        {
          path: "/welcome",
          name: "welcome",
        },
        {
            path: "/demo",
            name: "demo",
          }
      ]
    }
  ];
  return (

    <ProLayout
      fixSiderbar
      navTheme="dark"
      layout="mix"
      settings={{ navTheme: "dark" }}
      menuDataRender={() => menus}
      style={{
        height: '100vh',
      }}
      location={}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
    >
      <Outlet />
    </ProLayout>

  );
};

export default LayoutPage;
