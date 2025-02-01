import { Container } from "@chakra-ui/react";
import NavBar from "layout/Landing/Header/NavBar";
import MainDrawr from "./Drawr";
const LandingPage = () => {
  // const theme = useTheme();
  return (
    <>
      <NavBar />
      <MainDrawr />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default LandingPage;
