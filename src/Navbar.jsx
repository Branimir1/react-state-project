
import { Nav, Navbar, Container } from 'react-bootstrap';
import ShoppingCartModal from './chat_codes/ShoppingCartModal';

function BasicNav() {

  // const handleNavLinkClick = () => {
  //   // Close the Navbar when a link is clicked
  //   const navbarToggle = document.querySelector('.navbar-toggler');
  //   if (navbarToggle) {
  //     navbarToggle.click();
  //   }
  // };

  return (

    <Navbar className="bg-body-tertiary fixed-top">
      <Container>
          <Nav>
            <Nav.Link href="#home" >Home RB🍽️</Nav.Link>
            <Nav.Link href="#menu" >Menu</Nav.Link>
            <Nav.Link href="#contact" >Contact</Nav.Link>         
          </Nav>    
          <ShoppingCartModal />
      </Container>
    </Navbar>
  );
}

export default BasicNav;
