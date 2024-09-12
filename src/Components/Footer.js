import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function Footer() {
  return (
    <footer className="bg-dark text-light py-4" style={{ marginTop: "20px" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are a small team dedicated to crafting unique handmade products with care and attention to detail.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@example.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://facebook.com" className="text-light">Facebook</a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com" className="text-light">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-light">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
