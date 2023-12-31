import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
            <i class="fas fa-shopping-cart pe-2"></i>
                Cart
                </Nav.Link>
            <Nav.Link href="/login">
                <i className="fas fa-user pe-2"></i>
                Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header