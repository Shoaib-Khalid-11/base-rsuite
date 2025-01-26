import SimpleNavBar from "layout/NavBar";
import { useData } from "themes/hooks";

const LandingPage = () => {
  const { size } = useData();
  return (
    <>
      <SimpleNavBar />
      <h1 className="text-9xl font-bold underline text-blue-700">
        Home {size}
      </h1>
    </>
  );
};

export default LandingPage;
