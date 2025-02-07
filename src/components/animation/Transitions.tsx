import {
  AppMUIBox,
  AppMUICollapse,
  AppMUIFade,
  AppMUIGrow,
  AppMUISlide,
  AppMUIZoom,
} from "components/base";
import React, { ExoticComponent, ReactElement, Ref } from "react";
interface Props {
  children?: ReactElement;
  position?: string;
  in?: boolean;
  type?: string;
  direction?: "up" | "right" | "left" | "down";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [others: string]: any;
}
const Transitions: React.FC<Props> = (
  {
    children,
    position = "top-left",
    type = "grow",
    direction = "up",
    ...others
  },
  ref: Ref<ExoticComponent>
) => {
  let positionSX = {
    transformOrigin: "0 0 0",
  };

  switch (position) {
    case "top-right":
      positionSX = {
        transformOrigin: "top right",
      };
      break;
    case "top":
      positionSX = {
        transformOrigin: "top",
      };
      break;
    case "bottom-left":
      positionSX = {
        transformOrigin: "bottom left",
      };
      break;
    case "bottom-right":
      positionSX = {
        transformOrigin: "bottom right",
      };
      break;
    case "bottom":
      positionSX = {
        transformOrigin: "bottom",
      };
      break;
    case "top-left":
      positionSX = {
        transformOrigin: "top left",
      };
      break;
    default:
      positionSX = {
        transformOrigin: "0 0 0",
      };
      break;
  }
  return (
    <>
      <AppMUIBox ref={ref}>
        {type === "grow" && (
          <AppMUIGrow
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150,
            }}
          >
            <AppMUIBox sx={positionSX}>{children}</AppMUIBox>
          </AppMUIGrow>
        )}
        {type === "collapse" && (
          <AppMUICollapse {...others} sx={positionSX}>
            {children}
          </AppMUICollapse>
        )}
        {type === "fade" && (
          <AppMUIFade
            {...others}
            timeout={{
              appear: 0,
              enter: 300,
              exit: 150,
            }}
          >
            <AppMUIBox sx={positionSX}>{children}</AppMUIBox>
          </AppMUIFade>
        )}
        {type === "slide" && (
          <AppMUISlide
            {...others}
            timeout={{
              appear: 0,
              enter: 150,
              exit: 150,
            }}
            direction={direction}
          >
            <AppMUIBox sx={positionSX}>{children}</AppMUIBox>
          </AppMUISlide>
        )}
        {type === "zoom" && (
          <AppMUIZoom {...others}>
            <AppMUIBox sx={positionSX}>{children}</AppMUIBox>
          </AppMUIZoom>
        )}
      </AppMUIBox>
    </>
  );
};

export default Transitions;
