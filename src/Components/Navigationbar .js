import React from 'react';
import { Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navigationbar({ user, handleLogout, count }) {
  return (
    <Navbar className='navbar' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: "serif", fontSize: "30px", fontWeight: "bold" }}>
          Hastkala Heaven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/homedecor">Home Decor</Nav.Link>
            <Nav.Link as={Link} to="/jewellery">Jewellery</Nav.Link>
            <Nav.Link as={Link} to="/gift">Gifting</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
          </Nav>

          <Form className="d-flex me-auto" style={{width:"150px"}}>
            <FormControl type="text" placeholder="Search" className="me-2" />
          </Form>

          {/* Cart Icon with overlayed count */}
          <Nav.Link as={Link} to="/carts" className="text-light position-relative ms-3">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            {count > 0 && (
              <span className="cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {count}
              </span>
            )}
          </Nav.Link>

          {/* Conditional rendering based on user authentication */}
          {user ? (
            <Nav.Link as={Link} to="#" className="text-light ms-3" onClick={handleLogout}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login" className="text-light ms-3">
              Login
            </Nav.Link>
          )}
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
