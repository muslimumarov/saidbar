"use client";

import React from "react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { SidebarProps } from "./Sidebar.types";
import { useTranslation } from "react-i18next";

const Sidebar: React.FC<SidebarProps> = ({ ariaLabel }) => {
  const { t } = useTranslation();

  return (
    <FlowbiteSidebar
      className="fixed left-0 top-0 h-full"
      aria-label={ariaLabel || t("sidebar.ariaLabel")}
    >
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
            {t("sidebar.dashboard")}
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href="#"
            icon={HiViewBoards}
            label={t("sidebar.pro")}
            labelColor="dark"
          >
            {t("sidebar.kanban")}
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
            {t("sidebar.inbox")}
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiUser}>
            {t("sidebar.users")}
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
            {t("sidebar.products")}
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
            {t("sidebar.signIn")}
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item href="#" icon={HiTable}>
            {t("sidebar.signUp")}
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};

export default Sidebar;
