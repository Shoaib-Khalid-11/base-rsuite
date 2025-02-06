import { useMediaQuery, useTheme } from "@mui/material";
import {
  AppIcon,
  AppMUIBox,
  AppMUIListItemButton,
  AppMUIListItemIcon,
} from "components/base";
import Dot from "components/custom/Dot";
import { useAppStore } from "hooks";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import { Link, matchPath, useLocation } from "react-router-dom";
import { MenuOrientation, ThemeMode } from "types/config.model";
import { LinkTarget, NavItemType } from "types/menu.model";
interface Props {
  item: NavItemType;
  level: number;
  isParents?: boolean;
}
const NavItem = ({ item, level, isParents = false }: Props) => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const {
    appStateValue: { menuOrientation, mode },
  } = useAppStore();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const handlerDrawerOpen = useToggleDrawerOpen();
  let itemTarget: LinkTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }
  const itemIcon = item.icon ? (
    <AppIcon
      icon={item.icon.toString()}
      fontSize={`${drawerOpen ? 1.5 : 1.2}rem`}
      cursor={"pointer"}
    />
  ) : (
    false
  );
  const { pathname } = useLocation();
  const isSelected = !!matchPath(
    { path: item?.link ? item.link : item.url!, end: false },
    pathname
  );
  const textColor =
    mode === ThemeMode.DARK ? "secondary.400" : "secondary.main";
  const iconSelectedColor = "primary.main";
  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL ||
        (downLG && (
          <AppMUIBox>
            <AppMUIListItemButton
              component={Link}
              to={item.url!}
              target={itemTarget}
              disabled={item.disabled}
              selected={isSelected}
              sx={{
                zIndex: 1201,
                pl: drawerOpen ? `${level * 20}px` : 1.5,
                py: !drawerOpen && level === 1 ? 1.25 : 1,
                ...(drawerOpen && {
                  "&:hover": { bgcolor: "transparent" },
                  "&.Mui-selected": {
                    "&:hover": { bgcolor: "transparent" },
                    bgcolor: "transparent",
                  },
                }),
                ...(drawerOpen &&
                  level === 1 && {
                    mx: 1.25,
                    my: 0.5,
                    borderRadius: 1,
                    "&:hover": {
                      bgcolor:
                        mode === ThemeMode.DARK ? "divider" : "secondary.200",
                    },
                    "&.Mui-selected": {
                      color: iconSelectedColor,
                      "&:hover": { color: iconSelectedColor },
                    },
                  }),
                ...(!drawerOpen && {
                  px: 2.75,
                  justifyContent: "center",
                  "&:hover": { bgcolor: "transparent" },
                  "&.Mui-selected": {
                    "&:hover": { bgcolor: "transparent" },
                    bgcolor: "transparent",
                  },
                }),
              }}
              {...(downLG && {
                onClick: () => handlerDrawerOpen.mutate(false),
              })}
            >
              {itemIcon && (
                <AppMUIListItemIcon
                  sx={{
                    minWidth: 38,
                    color: isSelected ? iconSelectedColor : textColor,
                    ...(!drawerOpen &&
                      level === 1 && {
                        borderRadius: 1,
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          bgcolor:
                            mode === ThemeMode.DARK
                              ? "secondary.light"
                              : "secondary.main",
                        },
                      }),
                    ...(!drawerOpen &&
                      isSelected && {
                        bgcolor:
                          mode === ThemeMode.DARK
                            ? "secondary.dark"
                            : "primary.main",
                        "&:hover": {
                          bgcolor:
                            mode === ThemeMode.DARK
                              ? "secondary.dark"
                              : "primary.light",
                        },
                      }),
                  }}
                >
                  {itemIcon}
                </AppMUIListItemIcon>
              )}
              {!itemIcon && drawerOpen && (
                <AppMUIListItemIcon sx={{ minWidth: 30 }}>
                  <Dot
                    size={isSelected ? 6 : 5}
                    color={isSelected ? "primary" : "secondary"}
                  />
                </AppMUIListItemIcon>
              )}
            </AppMUIListItemButton>
          </AppMUIBox>
        ))}
    </>
  );
};

export default NavItem;
