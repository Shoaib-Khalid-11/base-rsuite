import { AppButton } from "components/base";
import { useAppStore } from "hooks";
import { Link } from "react-router-dom";
import {
  ButtonGroup,
  ButtonToolbar,
  Container,
  Header,
  HStack,
  Nav,
  Navbar,
} from "rsuite";

const SimpleNavBar = () => {
  const { setModeRuducer } = useAppStore();
  return (
    <>
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav>
              <HStack spacing={30}>
                <Nav.Item eventKey="home" as={Link} to={"/"}>
                  Home
                </Nav.Item>
                <Nav.Item eventKey="link">Link</Nav.Item>
                <Nav.Item eventKey="profile" as={Link} to={"/login"}>
                  login
                </Nav.Item>
              </HStack>
            </Nav>
            <Nav pullRight>
              <ButtonToolbar>
                <ButtonGroup size="lg">
                  <AppButton
                    color="green"
                    appearance="link"
                    size="lg"
                    onClick={() => setModeRuducer("light")}
                  >
                    light
                  </AppButton>
                  <AppButton
                    color="red"
                    appearance="subtle"
                    size="lg"
                    onClick={() => setModeRuducer("dark")}
                  >
                    dark
                  </AppButton>
                  <AppButton
                    color="violet"
                    appearance="primary"
                    size="lg"
                    onClick={() => setModeRuducer("high-contrast")}
                  >
                    contrast
                  </AppButton>
                </ButtonGroup>
              </ButtonToolbar>
            </Nav>
          </Navbar>
        </Header>
      </Container>
    </>
  );
};

export default SimpleNavBar;
