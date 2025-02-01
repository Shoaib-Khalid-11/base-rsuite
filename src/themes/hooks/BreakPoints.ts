// import { useMediaQuery } from "rsuite";

// // Define breakpoints with both `min-<breakpoint>` and `max-<breakpoint>` variations
// export const breakpoints = {
//   // For extra small screens
//   "max-xs": "(max-width: 480px)", // Max-width for extra small screens
//   "min-xs": "(min-width: 0px)", // Min-width for extra small screens (usually 0px to catch all screens below sm)
//   xs: "(min-width: 0px) and (max-width: 480px)", // Exact range for extra small screens

//   // For small screens
//   "max-sm": "(max-width: 640px)", // Max-width for small screens
//   "min-sm": "(min-width: 481px)", // Min-width for small screens
//   sm: "(min-width: 481px) and (max-width: 640px)", // Exact range for small screens

//   // For medium screens
//   "max-md": "(max-width: 768px)", // Max-width for medium screens
//   "min-md": "(min-width: 641px)", // Min-width for medium screens
//   md: "(min-width: 641px) and (max-width: 768px)", // Exact range for medium screens

//   // For large screens
//   "max-lg": "(max-width: 1024px)", // Max-width for large screens
//   "min-lg": "(min-width: 769px)", // Min-width for large screens
//   lg: "(min-width: 769px) and (max-width: 1024px)", // Exact range for large screens

//   // For extra large screens
//   "max-xl": "(max-width: 1280px)", // Max-width for extra large screens
//   "min-xl": "(min-width: 1025px)", // Min-width for extra large screens
//   xl: "(min-width: 1025px) and (max-width: 1280px)", // Exact range for extra large screens

//   // For extra extra large screens
//   "max-xxl": "(max-width: 1536px)", // Max-width for extra extra large screens
//   "min-xxl": "(min-width: 1281px)", // Min-width for extra extra large screens
//   xxl: "(min-width: 1281px)", // For screens larger than 1280px (extra extra large)
// };

// // type Breakpoint = keyof typeof breakpoints;

// export const useBreakpoint = (breakpoint: string | string[]): boolean[] => {
//   return useMediaQuery(breakpoint);
// };

// export default useBreakpoint;
