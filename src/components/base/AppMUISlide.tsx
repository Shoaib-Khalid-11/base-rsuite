import { Slide, SlideProps } from "@mui/material";

export const AppMUISlide: React.FC<SlideProps> = ({ children, ...props }) => {
  return (
    <>
      <Slide {...props}>{children}</Slide>
    </>
  );
};

export default AppMUISlide;
