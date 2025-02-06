import { ChipProps } from "@mui/material";
import { ReactNode } from "react";
import { NavActionType } from "./config.model";

export type NavActionProps = {
  type: NavActionType;
  label: string;
  function?: unknown;
  url?: string;
  target?: boolean;
  icon: ReactNode | string;
};
export type NavItemType = {
  breadcrumbs?: boolean;
  caption?: ReactNode | string;
  children?: NavItemType[];
  elements?: NavItemType[];
  chip?: ChipProps;
  color?: "primary" | "secondary" | "default" | undefined;
  disabled?: boolean;
  external?: boolean;
  isDropdown?: boolean;
  icon?: ReactNode | string;
  id?: string;
  link?: string;
  search?: string;
  target?: boolean;
  title?: ReactNode | string;
  type?: string;
  url?: string | undefined;
  actions?: NavActionProps[];
};
export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";
export type MenuProps = {
  /**
   * Indicate if dashboard layout menu open or not
   */
  isDashboardDrawerOpened: boolean;

  /**
   * Indicate if component layout menu open or not
   */
  isComponentDrawerOpened: boolean;
};
