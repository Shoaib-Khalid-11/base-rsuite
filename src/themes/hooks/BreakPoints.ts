import { useMediaQuery } from "rsuite";

// Define breakpoints with both `min-<breakpoint>` and `max-<breakpoint>` variations
export const breakpoints = {
  "max-xs": "(max-width: 575px)", // Max-width for extra small screens
  "min-xs": "(min-width: 576px)", // Min-width for extra small screens
  xs: "(max-width: 575px)", // For screens less than 576px (extra small)
  "max-sm": "(max-width: 767px)", // Max-width for small screens
  "min-sm": "(min-width: 576px)", // Min-width for small screens
  sm: "(min-width: 576px) and (max-width: 767px)", // Small screens
  "max-md": "(max-width: 991px)", // Max-width for medium screens
  "min-md": "(min-width: 768px)", // Min-width for medium screens
  md: "(min-width: 768px) and (max-width: 991px)", // Medium screens
  "max-lg": "(max-width: 1199px)", // Max-width for large screens
  "min-lg": "(min-width: 992px)", // Min-width for large screens
  lg: "(min-width: 992px) and (max-width: 1199px)", // Large screens
  "max-xl": "(max-width: 1200px)", // Max-width for extra large screens
  "min-xl": "(min-width: 1201px)", // Min-width for extra large screens
  xl: "(min-width: 1200px)", // For screens larger than 1200px (extra large)
};

type Breakpoint = keyof typeof breakpoints;

export const useBreakpoint = (breakpoint: Breakpoint): boolean[] => {
  return useMediaQuery(breakpoints[breakpoint]);
};

export default useBreakpoint;
