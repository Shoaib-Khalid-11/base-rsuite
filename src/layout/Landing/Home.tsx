import SimpleNavBar from "layout/NavBar";
import { useData } from "themes/hooks";

const LandingPage = () => {
  const { size } = useData();
  return (
    <>
      <SimpleNavBar />
      <h1>Home {size}</h1>
    </>
  );
};

export default LandingPage;
