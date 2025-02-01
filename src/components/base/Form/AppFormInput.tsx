// import { Controller, FieldValues, Control, Path } from "react-hook-form";
// import { Input } from "rsuite";

// interface AppInputProps<T extends FieldValues> {
//   name: Path<T>; // The name of the field in your form
//   control: Control<T>; // The react-hook-form control
//   defaultValue?: T[keyof T]; // Optional default value for the field
//   placeholder?: string; // Placeholder for the input
//   type?: string; // Input type (e.g., text, number, password, etc.)
// }
// const AppFormInput = <T extends FieldValues>({
//   name,
//   control,
//   defaultValue,
//   placeholder,
//   type = "text",
// }: AppInputProps<T>) => {
//   return (
//     <>
//       <Controller
//         name={name}
//         control={control}
//         defaultValue={defaultValue as T[keyof T]} // Type assertion for the default value
//         render={({ field, fieldState }) => (
//           <div>
//             <Input
//               {...field}
//               placeholder={placeholder}
//               type={type}
//               value={field.value} // Controlled value
//             />
//             {fieldState.error && (
//               <div style={{ color: "red", marginTop: "4px" }}>
//                 {fieldState.error.message}
//               </div>
//             )}
//           </div>
//         )}
//       />
//     </>
//   );
// };

// export default AppFormInput;
