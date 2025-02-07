import { Popper, styled, useMediaQuery, useTheme } from "@mui/material";
import {
  AppIcon,
  AppMUIBox,
  AppMUIClickAwayListener,
  AppMUIDivider,
  AppMUIList,
  AppMUIListItemButton,
  AppMUIListItemIcon,
  AppMUIListItemText,
  AppMUIPaper,
  AppMUITypography,
} from "components/base";
import { useAppStore } from "hooks";
import { useGetMenuMaster } from "hooks/menu";
import React, {
  Dispatch,
  Fragment,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { matchPath, useLocation } from "react-router-dom";
import { NavItemType } from "types/menu.model";
import NavItem from "./NavItem";
import { MenuOrientation, ThemeMode } from "types/config.model";
import { FormattedMessage } from "react-intl";
import Transitions from "components/animation/Transitions";
import SimpleBarScroll from "components/third-party/SimpleBarScroll";
interface Props {
  item: NavItemType;
  lastItem: number;
  remItems: NavItemType[];
  lastItemId: string;
  selectedID: string | undefined;
  setSelectedID: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedItems: Dispatch<SetStateAction<string | undefined>>;
  selectedItems: string | undefined;
  setSelectedLevel: Dispatch<SetStateAction<number>>;
  selectedLevel: number;
}
type VirtualElement = {
  getBoundingClientRect: () => DOMRect;
  contextElement?: Element;
};
const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: "visible",
  zIndex: 1202,
  minWidth: 180,
  "&:before": {
    background: theme.palette.background.paper,
    content: '""',
    display: "block",
    position: "absolute",
    top: 5,
    left: 32,
    width: 12,
    height: 12,
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 120,
    borderWidth: "6px",
    borderStyle: "solid",
    borderColor: `${theme.palette.background.paper}  transparent transparent ${theme.palette.background.paper}`,
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));
const NavGroup: React.FC<Props> = ({
  item,
  lastItem,
  remItems,
  lastItemId,
  selectedID,
  setSelectedID,
  setSelectedItems,
  selectedItems,
  setSelectedLevel,
  selectedLevel,
}) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const {
    appStateValue: { mode, menuOrientation, menuCaption },
  } = useAppStore();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const [anchorEl, setAnchorEl] = useState<
    VirtualElement | (() => VirtualElement) | null | undefined
  >(null);
  const [currentItem, setCurrentItem] = useState(item);
  const openMini = Boolean(anchorEl);
  useEffect(() => {
    if (lastItem) {
      if (item.id === lastItemId) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const localItem: any = { ...item };
        const elements = remItems.map((ele: NavItemType) => ele.elements);
        localItem.children = elements.flat(1);
        setCurrentItem(localItem);
      } else {
        setCurrentItem(item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, lastItem, downLG]);
  const checkOpenForParent = (child: NavItemType[], id: string) => {
    child.forEach((ele: NavItemType) => {
      if (ele.children?.length) {
        checkOpenForParent(ele.children, currentItem.id!);
      }

      if (
        ele.url &&
        !!matchPath(
          { path: ele?.link ? ele.link : ele.url, end: true },
          pathname
        )
      ) {
        setSelectedID(id);
      }
    });
  };
  const checkSelectedOnload = (data: NavItemType) => {
    const childrens = data.children ? data.children : [];
    childrens.forEach((itemCheck: NavItemType) => {
      if (itemCheck?.children?.length) {
        checkOpenForParent(itemCheck.children, currentItem.id!);
      }

      if (
        itemCheck.url &&
        !!matchPath(
          {
            path: itemCheck?.link ? itemCheck.link : itemCheck.url,
            end: true,
          },
          pathname
        )
      ) {
        setSelectedID(currentItem.id!);
      }
    });
  };
  useEffect(() => {
    checkSelectedOnload(currentItem);
    if (openMini) setAnchorEl(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentItem]);

  const handleClick = (event: MouseEvent<HTMLElement> | undefined) => {
    if (!openMini) {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSelected = selectedID === currentItem.id;
  const itemIcon = currentItem?.icon ? (
    <AppIcon
      fontSize={drawerOpen ? 26 : 28}
      icon={currentItem.icon!.toString()}
      color={
        isSelected ? theme.palette.primary.main : theme.palette.secondary.main
      }
      cursor="pointer"
    />
  ) : null;
  const navCollapse = item.children?.map((menuItem, index) => {
    switch (menuItem.type) {
      case "collapse":
        return (
          <></>
          // <NavCollapse
          //   key={menuItem.id}
          //   menu={menuItem}
          //   setSelectedItems={setSelectedItems}
          //   setSelectedLevel={setSelectedLevel}
          //   selectedLevel={selectedLevel}
          //   selectedItems={selectedItems}
          //   level={1}
          //   parentId={currentItem.id!}
          // />
        );
      case "item":
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <AppMUITypography
            key={index}
            variant="h6"
            color="error"
            align="center"
          >
            Fix - Group Collapse or Items
          </AppMUITypography>
        );
    }
  });
  const moreItems = remItems.map((itemRem: NavItemType, i) => (
    <Fragment key={i}>
      {itemRem.url ? (
        <NavItem item={item} level={1} />
      ) : (
        itemRem.title && (
          <AppMUITypography variant="caption" sx={{ pl: 2 }}>
            {itemRem.title} {itemRem.url}
          </AppMUITypography>
        )
      )}
      {itemRem?.elements?.map((menu) => {
        switch (menu.type) {
          case "collapse":
            return (
              <></>
              // <NavCollapse
              //   key={menu.id}
              //   menu={menu}
              //   level={1}
              //   parentId={currentItem.id!}
              //   setSelectedItems={setSelectedItems}
              //   setSelectedLevel={setSelectedLevel}
              //   selectedLevel={selectedLevel}
              //   selectedItems={selectedItems}
              // />
            );
          case "item":
            return <NavItem key={menu.id} item={menu} level={1} />;
          default:
            return (
              <AppMUITypography
                key={menu.id}
                variant="h6"
                color="error"
                align="center"
              >
                Menu Items Error
              </AppMUITypography>
            );
        }
      })}
    </Fragment>
  ));
  const items = currentItem.children?.map((menu) => {
    switch (menu?.type) {
      case "collapse":
        return (
          <></>
          //  <NavCollapse
          //    key={menu.id}
          //    menu={menu}
          //    level={1}
          //    parentId={currentItem.id!}
          //    setSelectedItems={setSelectedItems}
          //    setSelectedLevel={setSelectedLevel}
          //    selectedLevel={selectedLevel}
          //    selectedItems={selectedItems}
          //  />
        );
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <AppMUITypography
            key={menu?.id}
            variant="h6"
            color="error"
            align="center"
          >
            Menu Items Error
          </AppMUITypography>
        );
    }
  });
  const popperId = openMini ? `group-pop-${item.id}` : undefined;
  const textColor =
    mode === ThemeMode.DARK ? "secondary.dark" : "secondary.main";
  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <AppMUIList
          subheader={
            <>
              {item.title ? (
                drawerOpen && (
                  <AppMUIBox sx={{ pl: 3, mb: 1.5 }}>
                    <AppMUITypography
                      variant="h5"
                      color={
                        theme.palette.mode === ThemeMode.DARK
                          ? "text.secondary"
                          : "secondary.dark"
                      }
                      sx={{ textTransform: "uppercase", fontSize: "0.688rem" }}
                    >
                      {item.title}
                    </AppMUITypography>
                    {item.caption && (
                      <AppMUITypography variant="caption" color="secondary">
                        {item.caption}
                      </AppMUITypography>
                    )}
                  </AppMUIBox>
                )
              ) : (
                <AppMUIDivider sx={{ my: 0.5 }} />
              )}
            </>
          }
          sx={{
            mt: drawerOpen && menuCaption && item.title ? 1.5 : 0,
            py: 0,
            zIndex: 0,
          }}
        >
          {navCollapse}
        </AppMUIList>
      ) : (
        <AppMUIList>
          <AppMUIListItemButton
            selected={isSelected}
            sx={{
              p: 1,
              px: 1.5,
              my: 0.5,
              mr: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: 1,
            }}
            onMouseEnter={handleClick}
            onClick={handleClick}
            onMouseLeave={handleClose}
            aria-describedby={popperId}
          >
            {itemIcon && (
              <AppMUIListItemIcon sx={{ minWidth: 32 }}>
                {currentItem.id === lastItemId ? (
                  <AppIcon
                    fontSize={24}
                    icon="hugeicons:more"
                    cursor="pointer"
                  />
                ) : (
                  itemIcon
                )}
              </AppMUIListItemIcon>
            )}
            <AppMUIListItemText
              sx={{ mr: 1 }}
              primary={
                <AppMUITypography
                  variant="h6"
                  color={isSelected ? "primary" : textColor}
                  sx={{ fontWeight: isSelected ? 500 : 400 }}
                >
                  {currentItem.id === lastItemId ? (
                    <FormattedMessage id="more-items" />
                  ) : (
                    currentItem.title
                  )}
                </AppMUITypography>
              }
            />
            {anchorEl && (
              <PopperStyled
                id={popperId}
                open={openMini}
                anchorEl={anchorEl}
                placement="bottom-start"
                style={{ zIndex: 2001 }}
              >
                {({ TransitionProps }) => (
                  <Transitions in={openMini} {...TransitionProps}>
                    <AppMUIPaper
                      sx={{
                        mt: 0.5,
                        py: 1.25,
                        boxShadow: theme.shadows[16],
                        border: "1px solid ",
                        borderColor: "divider",
                        backgroundImage: "none",
                      }}
                    >
                      <AppMUIClickAwayListener onClickAway={handleClose}>
                        <>
                          <SimpleBarScroll
                            sx={{
                              minWidth: 200,
                              overflowY: "auto",
                              maxHeight: "calc(100vh - 170px)",
                            }}
                          >
                            {currentItem.id !== lastItemId ? items : moreItems}
                          </SimpleBarScroll>
                        </>
                      </AppMUIClickAwayListener>
                    </AppMUIPaper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </AppMUIListItemButton>
        </AppMUIList>
      )}
    </>
  );
};
export default NavGroup;
