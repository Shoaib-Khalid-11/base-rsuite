import {
  IconButton,
  IconButtonProps,
  styled,
  Theme,
  useTheme,
} from "@mui/material";
import {
  AppIcon,
  AppMUIAvatar,
  AppMUIBox,
  AppMUIList,
  AppMUIListItem,
  AppMUIListItemAvatar,
  AppMUIListItemText,
  AppMUIMenu,
  AppMUIMenuItem,
} from "components/base";
import { useGetMenuMaster } from "hooks/menu";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
interface ExpandMoreProps extends IconButtonProps {
  theme: Theme;
  expand: boolean;
  drawerOpen: boolean;
}
const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) =>
    prop !== "theme" && prop !== "expand" && prop !== "drawerOpen",
})(({ theme, expand, drawerOpen }: ExpandMoreProps) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(-90deg)",
  marginLeft: "auto",
  color: theme.palette.secondary.dark,
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(!drawerOpen && {
    opacity: 0,
    width: 50,
    height: 50,
  }),
}));
function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}
const getInitials = (name: string): string => {
  return name
    .split(" ") // Split the name into an array of words
    .map((word) => word.charAt(0)) // Get the first character of each word
    .join(""); // Join the characters into a single string
};
const NavUser = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const handleLogout = () => {
    navigate("/logout", {
      state: {
        from: "",
      },
    });
    //  window.location.reload();
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppMUIBox
        sx={{
          p: 1.25,
          px: !drawerOpen ? 1.25 : 3,
          borderTop: "2px solid ",
          borderTopColor: "divider",
        }}
      >
        <AppMUIList disablePadding>
          <AppMUIListItem
            disablePadding
            secondaryAction={
              <ExpandMore
                theme={theme}
                expand={open}
                drawerOpen={drawerOpen}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                aria-label="show more"
              >
                <AppIcon
                  icon="iconamoon:arrow-right-2-bold"
                  fontSize="0.625rem"
                  cursor="pointer"
                />
              </ExpandMore>
            }
            sx={{
              ...(!drawerOpen && {
                display: "flex",
                justifyContent: "flex-end",
              }),
              "& .MuiListItemSecondaryAction-root": {
                right: !drawerOpen ? 16 : -16,
              },
            }}
          >
            <AppMUIListItemAvatar>
              <AppMUIAvatar
                alt="Avatar"
                children={`${getInitials("Shoaib")}`}
                sx={{
                  ...(drawerOpen && { width: 46, height: 46 }),
                  bgcolor: stringToColor("Shoaib"),
                }}
              />
            </AppMUIListItemAvatar>
            <AppMUIListItemText
              primary={"Shoaib"}
              secondary={"Khalid"}
              slotProps={{
                primary: {
                  sx: {
                    maxWidth: 160,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                },
                secondary: {
                  sx: {
                    maxWidth: 160,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                },
              }}
              sx={{
                ...(!drawerOpen && { display: "none" }),
              }}
            />
          </AppMUIListItem>
        </AppMUIList>
        <AppMUIMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <AppMUIMenuItem onClick={handleLogout}>Logout</AppMUIMenuItem>
        </AppMUIMenu>
      </AppMUIBox>
    </>
  );
};

export default NavUser;
