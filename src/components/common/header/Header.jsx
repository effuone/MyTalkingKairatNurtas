import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Talking Kaireke</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Music</Nav.Link>
            <Nav.Link href="#pricing">Play</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header