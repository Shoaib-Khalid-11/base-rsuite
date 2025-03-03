import { Theme, useMediaQuery } from "@mui/material";
import { useAppStore } from "global/hooks";
import DrawerHeader from "global/shared/DrawerHeader";
import { MenuOrientation } from "global/types";
import {
  AppIcon,
  AppMUIBox,
  AppMUIButton,
  AppMUIIconButton,
  AppMUIMenu,
  AppMUIMenuItem,
  AppRouterLink,
} from "../components/elements/base";
import { useState } from "react";
import YouTubeSearchBar from "../components/custom/YoutubeSearchBar";
export const YoutubeHeaderContent = () => {
  const pages = [
    {
      title: "Home",
      url: "/",
    },
  ];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const {
    appStateValue: { menuOrientation },
  } = useAppStore();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && (
        <DrawerHeader open={true} />
      )}

      <AppMUIBox sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
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
              <>
                {page.url ? (
                  <AppRouterLink
                    to={page.url}
                    key={page.title}
                    onClick={handleCloseNavMenu}
                  >
                    <AppMUIMenuItem>{page.title}</AppMUIMenuItem>
                  </AppRouterLink>
                ) : (
                  <AppMUIMenuItem key={page.title}>{page.title}</AppMUIMenuItem>
                )}
              </>
            );
          })}
        </AppMUIMenu>
      </AppMUIBox>
      <YouTubeSearchBar />
      <AppMUIBox sx={{ display: { xs: "none", sm: "flex" } }}>
        {pages.map((page) => {
          return (
            <>
              {page.url ? (
                <AppRouterLink to={page.url} key={page.title}>
                  <AppMUIButton>{page.title}</AppMUIButton>
                </AppRouterLink>
              ) : (
                <AppMUIButton key={page.title}>{page.title}</AppMUIButton>
              )}
            </>
          );
        })}
      </AppMUIBox>
      {/* <DebouncedSearchBar /> */}
    </>
  );
};

export default YoutubeHeaderContent;
