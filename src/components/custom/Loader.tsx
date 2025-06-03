import { LinearProgress, LinearProgressProps, styled } from "@mui/material";
const LoaderWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 2001,
  width: "100%",
  "& > * + *": { marginTop: theme.spacing(2) },
}));
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LoaderProps extends LinearProgressProps {}

export const Loader: React.FC<LoaderProps> = ({ ...props }) => {
  return (
    <>
      <LoaderWrapper>
        <LinearProgress color="primary" sx={{ height: 6 }} {...props} />
      </LoaderWrapper>
    </>
  );
};

export default Loader;
