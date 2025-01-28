"use client";

import React from "react";
import { Sidebar } from "flowbite-react";
import { SidebarProps } from "../../core/interfaces/saidbarInterfaces/interfaces";
import { useTranslation } from "react-i18next";
import Loader from "../../core/components/Loader/Loader";
import { SidebarItem } from "../../core/interfaces/saidbarInterfaces/interfaces";
import {
  FileStackIcon,
  FileTextIcon,
  GlobeIcon,
  NewsIcon,
  ShieldEllipsisIcon,
} from "../../assets/icons/SidebarIcon";

export const sidebarItems: SidebarItem[] = [
  {
    label: "Yangiliklar",
    icon: NewsIcon,
    href: "#",
    badge: 3,
  },
  {
    label: "Maqolalar",
    icon: FileTextIcon,
    href: "#",
    labelType: "Pro",
    labelColor: "dark",
  },
  {
    label: "Xizmatlar",
    icon: GlobeIcon,
    href: "#",
  },
  {
    label: "Tavsiyalar",
    icon: NewsIcon,
    href: "#",
  },
  {
    label: "Hodisa haqida xabarlar",
    icon: ShieldEllipsisIcon,
    href: "#",
  },
  {
    label: "Shartnoma va hujjatlar",
    icon: FileStackIcon,
    href: "#",
  },
];

const SidebarComponent: React.FC<SidebarProps> = ({ ariaLabel }) => {
  const { t } = useTranslation();
  let docsShown = false;

  return (
    <>
      <Loader />
      <Sidebar className="fixed left-0 h-[100%]" aria-label={ariaLabel}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {sidebarItems.map((item, index) => {
              if (item.children) {
                return (
                  <Sidebar.Collapse key={index} label={t(item.label)}>
                    {item.children.map((child, childIndex) => (
                      <Sidebar.Item key={childIndex} href={child.href}>
                        {t(child.label)}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.Collapse>
                );
              }

              if (item.label === "Docs" && !docsShown) {
                docsShown = true;
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
                  <div className="flex items-center justify-between">
                    <span>{t(item.label)}</span>
                    {item.badge && (
                      <span className="ml-2 rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Sidebar.Item>
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
