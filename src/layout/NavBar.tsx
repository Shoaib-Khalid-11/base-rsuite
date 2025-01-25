import { Container, Header, HStack, Nav, Navbar } from "rsuite";

const SimpleNavBar = () => {
  return (
    <>
      <Container>
        <Header>
          <Navbar>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav>
              <HStack spacing={30}>
                <Nav.Item eventKey="home">Home</Nav.Item>
                <Nav.Item eventKey="link">Link</Nav.Item>
                <Nav.Item eventKey="profile">Profile</Nav.Item>
              </HStack>
            </Nav>
          </Navbar>
        </Header>
      </Container>
    </>
  );
};

export default SimpleNavBar;
