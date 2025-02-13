import { useMediaQuery, useTheme } from "@mui/material";
import {
  AppIcon,
  AppMUIAvatar,
  AppMUIBox,
  AppMUIChip,
  AppMUIIconButton,
  AppMUIListItemButton,
  AppMUIListItemIcon,
  AppMUIListItemText,
  AppMUITypography,
  AppRouterLink,
} from "components/base";
import Dot from "components/custom/Dot";
import { useAppStore } from "hooks";
import { useGetMenuMaster, useToggleDrawerOpen } from "hooks/menu";
import { matchPath, useLocation, Link } from "react-router-dom";
import { MenuOrientation, NavActionType, ThemeMode } from "types/config.model";
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
      fontSize={`${drawerOpen ? 1.5 : 2.2}rem`}
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
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <AppMUIBox sx={{ position: "relative" }}>
          <AppRouterLink to={item.url!} target={itemTarget}>
            <AppMUIListItemButton
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
                              : "secondary.light",
                          // : "secondary.main",
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
              {(drawerOpen || (!drawerOpen && level !== 1)) && (
                <AppMUIListItemText
                  primary={
                    <AppMUITypography
                      variant="h6"
                      sx={{
                        color: isSelected ? iconSelectedColor : textColor,
                        fontWeight: isSelected ? 500 : 400,
                      }}
                    >
                      {item.title}
                    </AppMUITypography>
                  }
                />
              )}
              {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
                <AppMUIChip
                  color={item.chip.color}
                  variant={item.chip.variant}
                  size={item.chip.size}
                  label={item.chip.label}
                  avatar={
                    item.chip.avatar && (
                      <AppMUIAvatar>{item.chip.avatar}</AppMUIAvatar>
                    )
                  }
                />
              )}
            </AppMUIListItemButton>
          </AppRouterLink>
          {(drawerOpen || (!drawerOpen && level !== 1)) &&
            item?.actions &&
            item?.actions.map((action, index) => {
              const callAction = action?.function;

              return (
                <AppMUIIconButton
                  key={index}
                  {...(action.type === NavActionType.FUNCTION && {
                    onClick: (event) => {
                      event.stopPropagation();
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-expect-error
                      callAction();
                    },
                  })}
                  {...(action.type === NavActionType.LINK && {
                    component: Link,
                    to: action.url,
                    target: action.target ? "_blank" : "_self",
                  })}
                  color="secondary"
                  // variant="outlined"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 20,
                    zIndex: 1202,
                    width: 20,
                    height: 20,
                    p: 0.25,
                    color: "secondary.dark",
                    borderColor: isSelected
                      ? "primary.light"
                      : "secondary.light",
                    "&:hover": {
                      borderColor: isSelected
                        ? "primary.main"
                        : "secondary.main",
                    },
                  }}
                >
                  <AppIcon
                    icon={action.icon!.toString()}
                    fontSize={12}
                    color={
                      mode === ThemeMode.DARK
                        ? theme.palette.secondary.dark
                        : theme.palette.secondary.main
                    }
                    style={{ marginLeft: 1 }}
                    cursor="pointer"
                  />
                </AppMUIIconButton>
              );
            })}
        </AppMUIBox>
      ) : (
        <AppRouterLink to={item.url!} target={itemTarget}>
          <AppMUIListItemButton
            disabled={item.disabled}
            selected={isSelected}
            sx={{
              zIndex: 1201,
              "&:hover": { bgcolor: "transparent" },
              ...(isParents && { color: textColor, p: 1, mr: 1 }),
              "&.Mui-selected": {
                bgcolor: "transparent",
                color: iconSelectedColor,
                "&:hover": {
                  color: iconSelectedColor,
                  bgcolor: "transparent",
                },
              },
            }}
          >
            {itemIcon && (
              <AppMUIListItemIcon
                sx={{
                  minWidth: 36,
                  ...(!drawerOpen && {
                    borderRadius: 1,
                    width: 36,
                    height: 26,
                    alignItems: "center",
                    justifyContent: "flex-start",
                    "&:hover": { bgcolor: "transparent" },
                  }),
                  ...(!drawerOpen &&
                    isSelected && {
                      bgcolor: "transparent",
                      "&:hover": { bgcolor: "transparent" },
                    }),
                }}
              >
                {itemIcon}
              </AppMUIListItemIcon>
            )}
            <AppMUIListItemText
              primary={
                <AppMUITypography
                  variant="h6"
                  sx={{
                    color: isSelected ? iconSelectedColor : textColor,
                    fontWeight: isSelected ? 500 : 400,
                  }}
                >
                  {item.title}
                </AppMUITypography>
              }
            />
            {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
              <AppMUIChip
                color={item.chip.color}
                variant={item.chip.variant}
                size={item.chip.size}
                label={item.chip.label}
                avatar={
                  item.chip.avatar && (
                    <AppMUIAvatar>{item.chip.avatar}</AppMUIAvatar>
                  )
                }
                sx={{ ml: 1 }}
              />
            )}
          </AppMUIListItemButton>
        </AppRouterLink>
      )}
    </>
  );
};

export default NavItem;
