import { CSSObject } from "@mui/material";
import { AppMUIBox } from "components/base";
interface Props {
  color?: string;
  size?: number;
  variant?: string;
  sx?: CSSObject;
  componentDiv?: boolean;
}
const Dot: React.FC<Props> = ({ color, size, variant, sx, componentDiv }) => {
  return (
    <>
      <AppMUIBox
        component={componentDiv ? "div" : "span"}
        sx={{
          width: size || 8,
          height: size || 8,
          borderRadius: "50%",
          bgcolor: variant === "outlined" ? "" : color,
          ...(variant === "outlined" && {
            border: `1px solid `,
            borderColor: color,
          }),
          ...sx,
        }}
      />
    </>
  );
};

export default Dot;
