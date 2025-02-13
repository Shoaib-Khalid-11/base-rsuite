import { SxProps } from "@mui/material";
import { AppMUIButtonBase } from "components/base";
import { To } from "react-router-dom";
import LogoIcon from "./LogoIcon";
import LogoMain from "./LogoMain";
interface Props {
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}
const LogoSection: React.FC<Props> = ({ isIcon, sx }) => {
  return (
    <>
      <AppMUIButtonBase disableRipple {...{ sx }}>
        {isIcon ? <LogoIcon /> : <LogoMain />}
      </AppMUIButtonBase>
    </>
  );
};

export default LogoSection;
