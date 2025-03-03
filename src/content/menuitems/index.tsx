import {
  sidebarMenuItems,
  useYoutubeMenuItems,
} from "global/examples/sidebarmenuItems";
import { NavItemType } from "global/types";
export const useMenuItems = () => {
  const youtubeMenuItems = useYoutubeMenuItems(); // ✅ Use hook inside a function

  const menuItem: { items?: NavItemType[]; youtube?: NavItemType[] } = {
    items: [...sidebarMenuItems], // Keep other items
    youtube: [...youtubeMenuItems], // Add YouTube items from the hook
  };

  return menuItem;
};

export default useMenuItems;
