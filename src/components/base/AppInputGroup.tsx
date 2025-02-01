// import { InputGroup } from "rsuite";
// import AppInput from "./AppInput";
// import { AppInputGroupProps } from "types";

// export const AppInputGroup = <
//   T extends string | number | readonly string[] | undefined
// >({
//   // value,
//   inputProps,
//   prefixData,
//   surfexData,
//   prefixButton,
//   surfexButton,
//   surfexButtonOnClick,
//   prefixButtonOnClick,
//   ...props
// }: AppInputGroupProps<T>) => {
//   return (
//     <InputGroup {...props}>
//       {prefixButton && (
//         <InputGroup.Button onClick={prefixButtonOnClick}>
//           {prefixButton}
//         </InputGroup.Button>
//       )}
//       {prefixData && <InputGroup.Addon>{prefixData}</InputGroup.Addon>}
//       <AppInput
//         {...inputProps}
//         value={inputProps.value} // `value` is of type T
//       />
//       {surfexData && <InputGroup.Addon>{surfexData}</InputGroup.Addon>}
//       {surfexButton && (
//         <InputGroup.Button onClick={surfexButtonOnClick}>
//           {surfexButton}
//         </InputGroup.Button>
//       )}
//     </InputGroup>
//   );
// };

// export default AppInputGroup;
