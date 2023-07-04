import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from '../assets/mylogo.png';
const Header = () => {
  return (
    <header >
      <Navbar bg="dark" varient="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" >
            <img src={logo} alt="shopshop" />
            ShopShop
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav calssname="ms-auto" >
              <Nav.Link href="/cart" > <FaShoppingCart  />Cart</Nav.Link>
              <Nav.Link href="/cart" ><FaUser  />Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

