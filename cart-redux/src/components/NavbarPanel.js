// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
 const CartProducts = useSelector((state) => state.cart)

 return(
  <Navbar expand="lg" className="NavB fixed-header">
   <Container fluid>
    <Navbar.Brand as={Link} to="/" className="text-white font-weight-bold">
     <span className="shopping">Shopping Cart</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-aria-controls="navbarScroll" className="bg-light"/>
    <Navbar.Collapse className="justify-content-end">
     <Nav>
      <Nav.Link as={Link} to="/cart" className="text-white opt">
       My Cart
       <i className="fa-solid fa-cart-shopping">{CartProducts.length}</i>
      </Nav.Link>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 )
}

export default NavBar