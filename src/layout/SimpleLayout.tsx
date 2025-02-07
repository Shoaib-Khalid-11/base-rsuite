import { AppMUIBox } from "components/base";
import NavBar from "shared/NavBar";

const SimpleLayout = () => {
  return (
    <>
      <AppMUIBox sx={{ display: "flex", width: "100%" }}>
        <NavBar />
      </AppMUIBox>
    </>
  );
};

export default SimpleLayout;
