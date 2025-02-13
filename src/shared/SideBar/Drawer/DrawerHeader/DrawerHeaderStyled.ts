import { styled } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
  // theme: Theme;
  open: boolean;
}
const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<Props>(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  paddingLeft: theme.spacing(open ? 3 : 0),
}));
export default DrawerHeaderStyled;
