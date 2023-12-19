import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './Cart.jsx'


function BasicNav() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap 🍽️</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Cart/>
      </Container>
    </Navbar>
  );
}

export default BasicNav;


/*
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-secondary">
      <div className="container">
        <a class="navbar-brand" href="#">Navbar 🍽️</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"> Home
            </li>
            <li className="nav-item px-2"> Menu
            </li>
            <li className="nav-item"> Contact
            </li>
          </ul>
        </div>
        <Cart/>
      </div>
    </nav>
  );
}; */
