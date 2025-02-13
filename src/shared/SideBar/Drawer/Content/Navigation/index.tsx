import { useMediaQuery, useTheme } from "@mui/material";
import { AppMUIBox, AppMUIDivider, AppMUITypography } from "components/base";
import { HORIZONTAL_MAX_ITEM } from "configs/config";
import { useAppStore } from "hooks";
import { useGetMenuMaster } from "hooks/menu";
import { Fragment, useLayoutEffect, useState } from "react";
import { MenuOrientation } from "types/config.model";
import { NavItemType } from "types/menu.model";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup";
import menuItem from "content/menuitems";

const Navigation = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const {
    appStateValue: { menuOrientation },
  } = useAppStore();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const [selectedID, setSelectedID] = useState<string | undefined>("");
  const [selectedItems, setSelectedItems] = useState<string | undefined>("");
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [menuItems, setMenuItems] = useState<{ items: NavItemType[] }>({
    items: [],
  });
  useLayoutEffect(() => {
    setMenuItems({ items: [...menuItem.items] });
  }, []);
  const isHorizontal =
    menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const lastItem = isHorizontal ? HORIZONTAL_MAX_ITEM : null;
  let lastItemIndex = menuItems.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < menuItems.items.length) {
    lastItemId = menuItems.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.items
      .slice(lastItem - 1, menuItems.items.length)
      .map((item) => ({
        title: item.title,
        elements: item.children,
        icon: item.icon,
        ...(item.url && {
          url: item.url,
        }),
      }));
  }
  const navGroups = menuItems.items.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case "group":
        if (item.url && item.id !== lastItemId) {
          return (
            <Fragment key={item.id}>
              {menuOrientation !== MenuOrientation.HORIZONTAL && (
                <AppMUIDivider sx={{ my: 0.5 }} />
              )}
              <NavItem item={item} level={1} isParents />
            </Fragment>
          );
        }
        return (
          <NavGroup
            key={item.id}
            selectedID={selectedID}
            setSelectedID={setSelectedID}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            lastItem={lastItem!}
            remItems={remItems}
            lastItemId={lastItemId}
            item={item}
          />
        );
      default:
        return (
          <AppMUITypography
            key={item.id}
            variant="h6"
            color="error"
            align="center"
          >
            Fix - Navigation Group
          </AppMUITypography>
        );
    }
  });
  return (
    <>
      <AppMUIBox
        sx={{
          pt: drawerOpen ? (isHorizontal ? 0 : 2) : 0,
          "& > ul:first-of-type": { mt: 0 },
          display: isHorizontal ? { xs: "block", lg: "flex" } : "block",
        }}
      >
        {navGroups}
      </AppMUIBox>
    </>
  );
};

export default Navigation;
