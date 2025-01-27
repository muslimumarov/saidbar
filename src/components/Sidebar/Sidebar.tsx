"use client";

import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { SidebarProps } from "./Sidebar.types";
import { useTranslation } from "react-i18next";
import { BiBuoy } from "react-icons/bi";
import { Docs, LockIcon, PadeIcon, signIn, signUp } from "./sideBaricon";

interface SidebarItem {
  label: string; // Ko'rsatiladigan matn
  icon?: React.ComponentType; // React ikonkasi turi
  href?: string; // Havola (ixtiyoriy)
  children?: SidebarItem[]; // Nested elementlar (ixtiyoriy)
  labelType?: string;
  labelColor?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: HiChartPie,
    href: "#",
  },
  {
    label: "Kanban",
    icon: HiViewBoards,
    href: "#",
    labelType: "Pro", // Maxsus belgi
    labelColor: "dark", // Maxsus rang
  },
  {
    label: "E-commerce",
    icon: HiShoppingBag,
    children: [
      { label: "Products", href: "#" },
      { label: "Sales", href: "#" },
      { label: "Refunds", href: "#" },
      { label: "Shipping", href: "#" },
    ],
  },
  {
    label: "Users",
    icon: HiUser,
    children: [
      { label: "Products", href: "#" },
      { label: "Sales", href: "#" },
      { label: "Refunds", href: "#" },
      { label: "Shipping", href: "#" },
    ],
  },
  {
    label: "Pages",
    icon: PadeIcon,
    children: [
      { label: "Products", href: "#" },
      { label: "Sales", href: "#" },
      { label: "Refunds", href: "#" },
      { label: "Shipping", href: "#" },
    ],
  },
  {
    label: "Authentication",
    icon: LockIcon,
    children: [
      { label: "Products", href: "#" },
      { label: "Sales", href: "#" },
      { label: "Refunds", href: "#" },
      { label: "Shipping", href: "#" },
    ],
  },
  {
    label: "Sign In",
    icon: signIn,
    href: "#",
  },
  {
    label: "Sign Up",
    icon: signUp,
    href: "#",
  },
  {
    label: "Docs",
    icon: Docs,
    href: "#",
  },
  {
    label: "Components",
    icon: HiTable,
    href: "#",
  },
  {
    label: "Help",
    icon: BiBuoy,
    href: "#",
  },
];

const SidebarComponent: React.FC<SidebarProps> = ({ ariaLabel }) => {
  const { t } = useTranslation();
  let docsShown = false; // Flag to ensure the div is shown only once

  return (
    <Sidebar
      className="fixed left-0 h-full"
      aria-label="Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sidebarItems.map((item, index) => {
            if (item.children) {
              return (
                <Sidebar.Collapse
                  key={index}
                  icon={item.icon}
                  label={t(item.label)}
                >
                  {item.children.map((child, childIndex) => (
                    <Sidebar.Item key={childIndex} href={child.href}>
                      {t(child.label)}
                    </Sidebar.Item>
                  ))}
                </Sidebar.Collapse>
              );
            }

            if (item.label === "Docs" && !docsShown) {
              docsShown = true; // Set the flag to true after it is shown
              return (
                <div key={index}>
                  <hr className="mb-[7px] mt-[3px] w-full" />
                  <Sidebar.Item href={item.href} icon={item.icon}>
                    {t(item.label)}
                  </Sidebar.Item>
                </div>
              );
            }

            return (
              <Sidebar.Item key={index} href={item.href} icon={item.icon}>
                {t(item.label)}
              </Sidebar.Item>
            );
          })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarComponent;
