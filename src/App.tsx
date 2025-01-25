import AppFormInputGroup from "components/base/Form/AppFormInputGroup";
import SimpleNavBar from "layout/NavBar";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
type FormData = {
  firstName: string;
  lastName: string;
};
function App() {
  const { control, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <>
      <SimpleNavBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppFormInputGroup
          name="firstName"
          control={control}
          label="First Name"
          inputGroupProps={{
            prefixData: "Mr.",
            surfexData: "Dr.",
            prefixButton: "Mr.",
            prefixButtonOnClick: () => {},
            inputProps: {
              placeholder: "Enter your first name",
              type: "password",
            },
          }}
        />

        <AppFormInputGroup
          name="lastName"
          control={control}
          label="Last Name"
          inputGroupProps={{
            inputProps: {
              placeholder: "Enter your last name",
              type: "text",
            },
          }}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default App;
