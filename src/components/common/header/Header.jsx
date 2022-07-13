import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">My Dancing Kaireke</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/play">Play</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header
