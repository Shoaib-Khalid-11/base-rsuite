/* eslint-disable @typescript-eslint/no-explicit-any */
import { Popper, styled, useMediaQuery, useTheme } from "@mui/material";
import { useAppStore } from "hooks";
import { useGetMenuMaster } from "hooks/menu";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { NavItemType } from "types/menu.model";
import NavItem from "./NavItem";
import {
  AppIcon,
  AppMUIBox,
  AppMUIClickAwayListener,
  AppMUICollapse,
  AppMUIIconButton,
  AppMUIList,
  AppMUIListItemButton,
  AppMUIListItemIcon,
  AppMUIListItemText,
  AppMUIMenu,
  AppMUIPaper,
  AppMUITypography,
} from "components/base";
import { MenuOrientation, ThemeMode } from "types/config.model";
import Dot from "components/custom/Dot";
import Transitions from "components/animation/Transitions";
import SimpleBarScroll from "components/third-party/SimpleBarScroll";

type VirtualElement = {
  getBoundingClientRect: () => DOMRect;
  contextElement?: Element;
};
const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: "visible",
  zIndex: 1202,
  minWidth: 180,
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 38,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: theme.palette.background.paper,
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 120,
  },
}));
interface Props {
  menu: NavItemType;
  level: number;
  parentId: string;
  setSelectedItems: Dispatch<SetStateAction<string | undefined>>;
  selectedItems: string | undefined;
  setSelectedLevel: Dispatch<SetStateAction<number>>;
  selectedLevel: number;
}
const NavCollapse: React.FC<Props> = ({
  menu,
  level,
  parentId,
  setSelectedItems,
  selectedItems,
  setSelectedLevel,
  selectedLevel,
}) => {
  const theme = useTheme();
  const navigation = useNavigate();

  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const {
    appStateValue: { mode, menuOrientation },
  } = useAppStore();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);
  const [anchorEl, setAnchorEl] = useState<
    VirtualElement | (() => VirtualElement) | null | undefined
  >(null);

  const [anchorElCollapse, setAnchorElCollapse] = useState<null | HTMLElement>(
    null
  );

  const openCollapse = Boolean(anchorElCollapse);
  const handleClickCollapse = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorElCollapse(event.currentTarget);
  };
  const handleCloseCollapse = () => {
    setAnchorElCollapse(null);
  };

  const handleClick = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | undefined,
    isRedirect: boolean
  ) => {
    setAnchorEl(null);
    setSelectedLevel(level);
    if (drawerOpen) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
      setSelectedItems(!selected ? menu.id : "");
      if (menu.url && isRedirect) navigation(`${menu.url}`);
    } else {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handlerIconLink = () => {
    if (!drawerOpen) {
      if (menu.url) navigation(`${menu.url}`);
      setSelected(menu.id);
    }
  };
  const handleHover = (event: MouseEvent<HTMLElement> | undefined) => {
    setAnchorEl(event?.currentTarget);
    if (!drawerOpen) {
      setSelected(menu.id);
    }
  };

  const miniMenuOpened = Boolean(anchorEl);

  const handleClose = () => {
    setOpen(false);
    if (!miniMenuOpened && !menu.url) {
      setSelected(null);
    }
    setAnchorEl(null);
  };
  useMemo(() => {
    if (selected === selectedItems) {
      if (level === 1) {
        setOpen(true);
      }
    } else {
      if (level === selectedLevel) {
        setOpen(false);
        if ((!miniMenuOpened && !drawerOpen && !selected) || drawerOpen) {
          setSelected(null);
        }
      }
    }
  }, [
    selectedItems,
    level,
    selected,
    miniMenuOpened,
    drawerOpen,
    selectedLevel,
  ]);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === menu.url) {
      setSelected(menu.id);
    }
    // eslint-disable-next-line
  }, [pathname]);
  const checkOpenForParent = (child: NavItemType[], id: string) => {
    child.forEach((item: NavItemType) => {
      if (item.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };
  useEffect(() => {
    setOpen(false);
    if (!miniMenuOpened) {
      setSelected(null);
    }
    if (miniMenuOpened) setAnchorEl(null);
    if (menu.children) {
      menu.children.forEach((item: NavItemType) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id!);
        }

        if (
          item.link &&
          !!matchPath({ path: item?.link, end: false }, pathname)
        ) {
          setSelected(menu.id);
          setOpen(true);
        }

        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menu.children]);

  useEffect(() => {
    if (menu.url === pathname) {
      setSelected(menu.id);
      setAnchorEl(null);
      setOpen(true);
    }
  }, [pathname, menu]);
  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return (
          <NavCollapse
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            menu={item}
            level={level + 1}
            parentId={parentId}
          />
        );
      case "item":
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <AppMUITypography
            key={item.id}
            variant="h6"
            color="error"
            align="center"
          >
            Fix - Collapse or Item
          </AppMUITypography>
        );
    }
  });
  const isSelected = selected === menu.id;
  const borderIcon =
    level === 1 ? (
      <AppIcon
        fontSize={drawerOpen ? 24 : 26}
        icon="gravity-ui:copy"
        cursor="pointer"
      />
    ) : (
      false
    );
  const menuIcon = menu.icon ? (
    <AppIcon
      fontSize={drawerOpen ? 26 : 28}
      icon={menu.icon!.toString()}
      cursor="pointer"
    />
  ) : (
    borderIcon
  );
  const textColor =
    mode === ThemeMode.DARK
      ? theme.palette.secondary.dark
      : theme.palette.secondary.main;
  const iconSelectedColor =
    mode === ThemeMode.DARK && drawerOpen
      ? theme.palette.text.primary
      : theme.palette.primary.main;
  const popperId = miniMenuOpened ? `collapse-pop-${menu.id}` : undefined;
  const FlexBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };
  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <>
          <AppMUIListItemButton
            id={`${menu.id}-button`}
            selected={isSelected}
            {...(!drawerOpen && {
              onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                handleClick(e, true),
              onMouseLeave: handleClose,
            })}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onClick={(e) => handleClick(e, true)}
            sx={{
              pl: drawerOpen ? `${level === 1 ? 20 : level * 20 - 10}px` : 1.5,
              py: !drawerOpen && level === 1 ? 1.25 : 1,
              ...(drawerOpen && {
                mx: 1.25,
                my: 0.5,
                borderRadius: 1,
                "&:hover": {
                  bgcolor:
                    mode === ThemeMode.DARK ? "divider" : "secondary.200",
                },
                "&.Mui-selected": { color: iconSelectedColor },
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
            {...((drawerOpen &&
              menu.isDropdown && {
                "aria-controls": openCollapse ? `${menu.id}-menu` : undefined,
                "aria-haspopup": true,
                "aria-expanded": openCollapse ? "true" : undefined,
                onClick: handleClickCollapse,
              }) as any)}
          >
            {menuIcon && (
              <AppMUIListItemIcon
                onClick={handlerIconLink}
                sx={{
                  minWidth: 38,
                  color: isSelected ? "primary.main" : textColor,
                  ...(!drawerOpen && {
                    borderRadius: 1,
                    width: 46,
                    height: 46,
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
                          ? "secondary.light"
                          : "primary.main",
                      "&:hover": {
                        bgcolor:
                          mode === ThemeMode.DARK
                            ? "secondary.main"
                            : "primary.light",
                      },
                    }),
                }}
              >
                {menuIcon}
              </AppMUIListItemIcon>
            )}
            {!menuIcon && drawerOpen && (
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
                    color={isSelected ? "primary" : textColor}
                    sx={{ fontWeight: isSelected ? 500 : 400 }}
                  >
                    {menu.title}
                  </AppMUITypography>
                }
                secondary={
                  menu.caption && (
                    <AppMUITypography variant="caption" color="secondary">
                      {menu.caption}
                    </AppMUITypography>
                  )
                }
              />
            )}
            {(drawerOpen || (!drawerOpen && level !== 1)) &&
              (menu?.url ? (
                <AppMUIIconButton
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClick(event, false);
                  }}
                  color="secondary"
                  // variant="outlined"
                  sx={{
                    width: 20,
                    height: 20,
                    mr: "-5px !important",
                    p: 0.25,
                    color: "secondary.dark",
                    borderColor: open ? "primary.light" : "secondary.light",
                    "&:hover": {
                      borderColor: open ? "primary.main" : "secondary.main",
                    },
                  }}
                >
                  {miniMenuOpened || open ? (
                    <>
                      {miniMenuOpened ? (
                        <AppIcon
                          fontSize={16}
                          icon="iconamoon:arrow-right-2-bold"
                          color={textColor}
                          style={{ marginLeft: 1 }}
                          cursor="pointer"
                        />
                      ) : (
                        <AppIcon
                          fontSize={16}
                          icon="iconamoon:arrow-up-2-bold"
                          color={textColor}
                          style={{ marginLeft: 1 }}
                          cursor="pointer"
                        />
                      )}
                    </>
                  ) : (
                    <AppIcon
                      fontSize={16}
                      icon="iconamoon:arrow-down-2-bold"
                      color={textColor}
                      style={{ marginLeft: 1 }}
                      cursor="pointer"
                    />
                  )}
                </AppMUIIconButton>
              ) : (
                <>
                  {miniMenuOpened || open ? (
                    <>
                      {miniMenuOpened ? (
                        <AppIcon
                          fontSize={16}
                          icon="iconamoon:arrow-right-2-bold"
                          color={textColor}
                          style={{ marginLeft: 1 }}
                          cursor="pointer"
                        />
                      ) : (
                        <AppIcon
                          fontSize={16}
                          icon="iconamoon:arrow-up-2-bold"
                          color={textColor}
                          style={{ marginLeft: 1 }}
                          cursor="pointer"
                        />
                      )}
                    </>
                  ) : (
                    <AppIcon
                      fontSize={16}
                      icon="iconamoon:arrow-down-2-bold"
                      color={textColor}
                      style={{ marginLeft: 1 }}
                      cursor="pointer"
                    />
                  )}
                </>
              ))}
            {!drawerOpen && (
              <PopperStyled
                open={miniMenuOpened}
                anchorEl={anchorEl}
                placement="right-start"
                style={{ zIndex: 2001 }}
                popperOptions={{
                  modifiers: [
                    { name: "offset", options: { offset: [-12, 1] } },
                  ],
                }}
              >
                {({ TransitionProps }) => (
                  <Transitions in={miniMenuOpened} {...TransitionProps}>
                    <AppMUIPaper
                      sx={{
                        overflow: "hidden",
                        mt: 1.5,
                        boxShadow: theme.shadows[16],
                        backgroundImage: "none",
                        border: "1px solid ",
                        borderColor: "divider",
                      }}
                    >
                      <AppMUIClickAwayListener onClickAway={handleClose}>
                        <>
                          <SimpleBarScroll
                            sx={{
                              overflowX: "hidden",
                              overflowY: "auto",
                              maxHeight: "calc(100vh - 170px)",
                            }}
                          >
                            {navCollapse}
                          </SimpleBarScroll>
                        </>
                      </AppMUIClickAwayListener>
                    </AppMUIPaper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </AppMUIListItemButton>
          {drawerOpen && !menu?.isDropdown && (
            <AppMUICollapse in={open} timeout="auto" unmountOnExit>
              <AppMUIList sx={{ p: 0 }}>{navCollapse}</AppMUIList>
            </AppMUICollapse>
          )}
          {drawerOpen && menu?.isDropdown && (
            <AppMUIMenu
              id={`${menu.id}-menu`}
              aria-labelledby={`${menu.id}-button`}
              anchorEl={anchorElCollapse}
              open={openCollapse}
              onClose={handleCloseCollapse}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ "& .MuiPaper-root": { boxShadow: theme.shadows[2] } }}
            >
              {navCollapse}
            </AppMUIMenu>
          )}
        </>
      ) : (
        <>
          <AppMUIListItemButton
            {...(menu?.url && { component: Link, to: menu.url })}
            id={`boundary-${popperId}`}
            selected={isSelected}
            onMouseEnter={handleHover}
            onMouseLeave={handleClose}
            onClick={handleHover}
            aria-describedby={popperId}
            sx={{
              "&:hover": {
                bgcolor: "transparent",
              },
              "&.Mui-selected": {
                "&:hover": {
                  bgcolor: "transparent",
                },
                bgcolor: "transparent",
              },
            }}
          >
            <AppMUIBox onClick={handlerIconLink} sx={FlexBox}>
              {menuIcon && (
                <AppMUIListItemIcon
                  sx={{
                    my: "auto",
                    minWidth: !menu.icon ? 18 : 36,
                    color: "secondary.dark",
                  }}
                >
                  {menuIcon}
                </AppMUIListItemIcon>
              )}
              <AppMUIListItemText
                primary={
                  <AppMUITypography
                    variant="h6"
                    color={textColor}
                    sx={{ fontWeight: isSelected ? 500 : 400 }}
                  >
                    {menu.title}
                  </AppMUITypography>
                }
              />
              {miniMenuOpened ? (
                <AppIcon
                  fontSize={16}
                  icon="iconamoon:arrow-right-2-bold"
                  color={textColor}
                  cursor="pointer"
                />
              ) : (
                <AppIcon
                  fontSize={12}
                  icon="iconamoon:arrow-down-2-bold"
                  color={textColor}
                  cursor="pointer"
                />
              )}
            </AppMUIBox>
            {anchorEl && (
              <PopperStyled
                id={popperId}
                open={miniMenuOpened}
                anchorEl={anchorEl}
                placement="right-start"
                style={{ zIndex: 2001 }}
                modifiers={[{ name: "offset", options: { offset: [-10, 0] } }]}
              >
                {({ TransitionProps }) => (
                  <Transitions in={miniMenuOpened} {...TransitionProps}>
                    <AppMUIPaper
                      sx={{
                        overflow: "hidden",
                        mt: 1.5,
                        py: 0.5,
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
                              overflowX: "hidden",
                              overflowY: "auto",
                              maxHeight: "calc(100vh - 170px)",
                            }}
                          >
                            {navCollapse}
                          </SimpleBarScroll>
                        </>
                      </AppMUIClickAwayListener>
                    </AppMUIPaper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </AppMUIListItemButton>
        </>
      )}
    </>
  );
};

export default NavCollapse;
