import React, { useState, useRef, useEffect, ReactNode } from "react";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { AppMUIStack, AppMUIIconButton, AppIcon } from "../elements/base";
import { ButtonProps, Stack, StackProps } from "@mui/material";

interface ScrollableContainerProps {
  children: ReactNode;
  LeftButtonProps?: ButtonProps;
  RightButtonProps?: ButtonProps;
  WrapperStackProps?: StackProps; // keeping this for flexibility
  StackProps?: StackProps; // if this is needed separately, keep it for flexibility
}

export const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
  LeftButtonProps,
  RightButtonProps,
  StackProps,
  WrapperStackProps,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollContainer = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 150;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <AppMUIStack
      {...WrapperStackProps} // Make sure to use the wrapper prop here
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ position: "relative", width: "100%" }}
    >
      {showLeftButton && (
        <AppMUIIconButton
          {...LeftButtonProps}
          onClick={() => scrollContainer("left")}
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 2,
            background: "white",
            // "&::after": {
            //   content: '""',
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   width: "100%",
            //   height: "100%",
            //   background:
            //     "linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)",
            //   zIndex: -1,
            // },
          }}
        >
          <AppIcon icon="eva:arrow-ios-back-fill" />
        </AppMUIIconButton>
      )}
      <Stack
        {...StackProps}
        direction="row"
        spacing={1}
        ref={containerRef}
        onScroll={handleScroll}
        sx={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          p: 1,
          flex: 1,
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </Stack>
      {showRightButton && (
        <AppMUIIconButton
          {...RightButtonProps}
          onClick={() => scrollContainer("right")}
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 2,
            background: "white",
            // "&::before": {
            //   content: '""',
            //   position: "absolute",
            //   top: 0,
            //   right: 0,
            //   width: "100%",
            //   height: "100%",
            //   background:
            //     "linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)",
            //   zIndex: -1,
            // },
          }}
        >
          <AppIcon icon="eva:arrow-ios-forward-fill" />
        </AppMUIIconButton>
      )}
    </AppMUIStack>
  );
};

export default ScrollableContainer;
