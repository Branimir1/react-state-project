// navbar.jsx

import { Nav, Navbar, Container, Alert } from 'react-bootstrap';
import ShoppingCartModal from './components/ShoppingCartModal';

function BasicNav({ handleShowSuccessMessage }) {

  return (

    <Navbar className="bg-body-tertiary fixed-top">
      <Container>
          <Nav>
            <Nav.Link href="#home" >Home RB🍽️</Nav.Link>
            <Nav.Link href="#menu" >Menu</Nav.Link>
            <Nav.Link href="#contact" >Contact</Nav.Link>         
          </Nav>    
          <ShoppingCartModal handleShowSuccessMessage={handleShowSuccessMessage} />
      </Container>
    </Navbar>
  );
}

export default BasicNav;
