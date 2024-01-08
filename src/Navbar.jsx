// navbar.jsx

import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';
import ShoppingCartModal from './components/ShoppingCartModal';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


function BasicNav({ handleShowSuccessMessage }) {

  return (

    <Navbar className="bg-body-tertiary fixed-top" >
      <Container>
          <Nav>
            <NavLink as={Link} to="/login">RB🍽️</NavLink>
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#menu" >Menu</Nav.Link>
            <Nav.Link href="#contact" >Contact</Nav.Link>         
          </Nav>    
          <ShoppingCartModal handleShowSuccessMessage={handleShowSuccessMessage} />
      </Container>
    </Navbar>
  );
}

export default BasicNav;
