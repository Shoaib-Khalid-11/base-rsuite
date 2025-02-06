import {
  AppIcon,
  AppMUIAppBar,
  AppMUIAvatar,
  AppMUIBox,
  AppMUIButton,
  AppMUIContainer,
  AppMUIIconButton,
  AppMUIMenu,
  AppMUIMenuItem,
  AppMUIToolBar,
  AppMUIToolTip,
} from "components/base";
import { useState } from "react";
import LogoIcon from "shared/icon/LogoIcon";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppMUIAppBar position="static" color="default">
        <AppMUIContainer maxWidth="xl">
          <AppMUIToolBar sx={{ alignItems: "center", gap: "1rem" }}>
            <AppMUIBox>
              <AppMUIIconButton size="large" edge="start" color="success">
                <LogoIcon />
              </AppMUIIconButton>
            </AppMUIBox>

            <AppMUIBox
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            >
              {pages.map((page) => {
                return (
                  <AppMUIButton key={page} sx={{ mr: 2 }}>
                    {page}
                  </AppMUIButton>
                );
              })}
            </AppMUIBox>
            <AppMUIBox
              sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}
            />
            <AppMUIBox
              sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}
            >
              <AppMUIIconButton
                size="large"
                edge="end"
                color="primary"
                onClick={handleOpenNavMenu}
              >
                <AppIcon icon="la:bars" />
              </AppMUIIconButton>
              <AppMUIMenu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => {
                  return (
                    <AppMUIMenuItem key={page} onClick={handleCloseNavMenu}>
                      {page}
                    </AppMUIMenuItem>
                  );
                })}
              </AppMUIMenu>
            </AppMUIBox>
            <AppMUIBox>
              <AppMUIToolTip title="Account settings">
                <AppMUIIconButton
                  size="large"
                  onClick={handleOpenUserMenu}
                  edge="end"
                  color="primary"
                >
                  <AppMUIAvatar src="https://picsum.photos/200" />
                </AppMUIIconButton>
              </AppMUIToolTip>
              <AppMUIMenu
                id="user-menu"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => {
                  return (
                    <AppMUIMenuItem key={setting} onClick={handleCloseUserMenu}>
                      {setting}
                    </AppMUIMenuItem>
                  );
                })}
              </AppMUIMenu>
            </AppMUIBox>
          </AppMUIToolBar>
        </AppMUIContainer>
      </AppMUIAppBar>
    </>
  );
};

export default NavBar;
