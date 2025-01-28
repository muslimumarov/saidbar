import React from "react";
import SidebarComponent from "./SidebarItems copy";

interface SidebarProps {
  // Add any props your Sidebar might need
}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div>
      <SidebarComponent />
    </div>
  );
};
