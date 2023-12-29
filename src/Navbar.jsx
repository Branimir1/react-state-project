
import { Nav, Navbar, Container } from 'react-bootstrap';
import ShoppingCartModal from './chat_codes/ShoppingCartModal';
import { Link } from 'react-router-dom';

function BasicNav() {

  const handleNavLinkClick = () => {
    // Close the Navbar when a link is clicked
    const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbarToggle) {
      navbarToggle.click();
    }
  };

  return (
    <Navbar expand="md" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ShoppingCartModal className="position-absolute top-0 end-0"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="#home" onClick={handleNavLinkClick}>Home RB🍽️</Nav.Link>
            <Nav.Link href="#menu" onClick={handleNavLinkClick}>Menu</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavLinkClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;


