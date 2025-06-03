import { Theme, useMediaQuery } from "@mui/material";
import { useAppStore } from "hooks";
import DrawerHeader from "shared/DrawerHeader";
import { MenuOrientation } from "types";
import {
  AppMUIAvatar,
  AppMUIBox,
  AppMUIIconButton,
  AppMUIMenu,
  AppMUIMenuItem,
  AppMUIToolTip,
} from "../components/elements/base";
import { useState } from "react";
import YouTubeSearchBar from "../components/custom/YoutubeSearchBar";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const YoutubeHeaderContent = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const {
    appStateValue: { menuOrientation },
  } = useAppStore();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && (
        <DrawerHeader open={true} />
      )}
      <YouTubeSearchBar />
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
          <AppMUIMenuItem onClick={handleCloseUserMenu}></AppMUIMenuItem>
          {settings.map((setting) => {
            return (
              <AppMUIMenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting}
              </AppMUIMenuItem>
            );
          })}
        </AppMUIMenu>
      </AppMUIBox>
    </>
  );
};

export default YoutubeHeaderContent;
