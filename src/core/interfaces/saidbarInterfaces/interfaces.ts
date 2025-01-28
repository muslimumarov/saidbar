export interface SidebarItem {
  label: string;
  icon?: React.ComponentType;
  href?: string;
  children?: SidebarItem[];
  labelType?: string;
  labelColor?: string;
  badge?: number; // **badge xususiyati qo‘shildi**
}
export interface SidebarProps {
  ariaLabel?: string;
}
