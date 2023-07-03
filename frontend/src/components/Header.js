import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header >
      <Navbar bg="dark" varient="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" style={{ color: 'white' }}>ShopShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav calssname="ms-auto" >
              <Nav.Link href="/cart" style={{ color: 'white' }}> <FaShoppingCart style={{ color: 'white' }} />Cart</Nav.Link>
              <Nav.Link href="/cart" style={{ color: 'white' }}><FaUser style={{ color: 'white' }} />Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

// const whitestyle = {
//   color: 'white'
// }