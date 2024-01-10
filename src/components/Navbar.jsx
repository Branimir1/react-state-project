// navbar.jsx
import { Nav, Navbar, Container } from 'react-bootstrap';
import ShoppingCartModal from './ShoppingCartModal';
import { Link } from 'react-router-dom';  
// Import Link from react-router-dom ima i navlink, will see


function BasicNav({ handleShowSuccessMessage }) {

  return (

    <Navbar className="bg-body-tertiary fixed-top" >
      <Container>
          <Nav>
            <Nav.Link as={Link} to="/login">RB🍽️</Nav.Link>
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
