import { AppIconButton } from "components/base";
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
              <Nav.Item as={"div"}>
                <ButtonToolbar>
                  <ButtonGroup size="lg">
                    <AppIconButton
                      iconProps={{
                        icon: "line-md:sunny-filled-loop",
                        color: "yellow",
                      }}
                      color="yellow"
                      appearance="subtle"
                      size="lg"
                      onClick={() => setModeRuducer("light")}
                    />
                    <AppIconButton
                      iconProps={{
                        icon: "line-md:moon-rising-alt-loop",
                        color: "white",
                      }}
                      color="blue"
                      appearance="subtle"
                      size="lg"
                      onClick={() => setModeRuducer("dark")}
                    />
                    <AppIconButton
                      iconProps={{
                        icon: "tabler:sun-moon",
                        color: "green",
                      }}
                      color="violet"
                      appearance="subtle"
                      size="lg"
                      onClick={() => setModeRuducer("high-contrast")}
                    />
                  </ButtonGroup>
                </ButtonToolbar>
              </Nav.Item>
            </Nav>
          </Navbar>
        </Header>
      </Container>
    </>
  );
};

export default SimpleNavBar;
