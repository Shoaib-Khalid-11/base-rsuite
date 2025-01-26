import { AppButton, AppIconButton } from "components/base";
import { useAppStore } from "hooks";
import { Link } from "react-router-dom";
import {
  ButtonGroup,
  ButtonToolbar,
  Col,
  Container,
  Grid,
  Header,
  Nav,
  Navbar,
  Row,
} from "rsuite";
import { breakpoints, useBreakpoint } from "themes/hooks";

const SimpleNavBar = () => {
  const { setModeRuducer } = useAppStore();
  const [isXS] = useBreakpoint([breakpoints.xs]);
  console.log("isXS", isXS);
  return (
    <>
      <Container>
        <Header>
          <Navbar appearance="subtle">
            {/* <Navbar.Brand
              icon={<AppIconButton iconProps={{ icon: "logo" }} />}
            ></Navbar.Brand> */}
            <Nav>
              <Nav.Item eventKey="home" as={Link} to={"/"}>
                <AppIconButton
                  iconProps={{ icon: "line-md:menu-unfold-left" }}
                  appearance="subtle"
                  size="lg"
                />
              </Nav.Item>
            </Nav>
            <Nav>
              <Grid fluid>
                <Row gutter={20} className="show-grid">
                  <Col xs={12} sm={6} md={6} lg={12}>
                    <Nav.Item eventKey="home" as={Link} to={"/"}>
                      <AppButton>Home</AppButton>
                    </Nav.Item>
                  </Col>
                  <Nav.Item eventKey="link">Link</Nav.Item>
                  <Nav.Item eventKey="profile" as={Link} to={"/login"}>
                    login
                  </Nav.Item>
                </Row>
              </Grid>
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
