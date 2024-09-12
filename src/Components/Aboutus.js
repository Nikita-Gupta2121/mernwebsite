import React from 'react';
import { Container, Row, Col, Image, } from 'react-bootstrap';
import { Footer } from './Footer';

export function Aboutus() {
  return (
    <>
      <div className="aboutus-section">
        <Container fluid style={{ marginTop: "20px" }}>
          {/* Introduction Section */}
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} md={6} className="text-center text-md-left mb-4 mb-md-0">
              <Image src="/slide2.jpg" rounded fluid className="aboutus-image" />
            </Col>
            <Col xs={12} md={6} className="text-center text-md-left">
              <h1 className="aboutus-title">Discover the Magic of Handmade</h1>
              <p className="aboutus-text">
                In a world of mass production, handmade items are a breath of fresh air. Each piece tells a story, 
                carrying the passion, skill, and dedication of the artisan who created it. When you choose handmade, 
                you are not just buying a product, but a unique creation filled with <span className="highlight">soul and authenticity</span>.
              </p>
            </Col>
          </Row>

          {/* Craftsmanship Section */}
          <Row className="d-flex align-items-center justify-content-center my-5">
            <Col xs={12} md={6} className="text-center text-md-left order-md-2 mb-4 mb-md-0">
              <Image src="/slide3.jpg" rounded fluid className="aboutus-image" />
            </Col>
            <Col xs={12} md={6} className="text-center text-md-left order-md-1">
              <h2 className="aboutus-title">Craftsmanship at Its Finest</h2>
              <p className="aboutus-text">
                Every handmade product is a labor of love. From the carefully chosen materials to the meticulous 
                attention to detail, our artisans pour their hearts into their work. These are <span className="highlight">timeless treasures </span> 
                that bring warmth and character into your life.
              </p>
            </Col>
          </Row>

          {/* Sustainability and Uniqueness Section */}
          <Row className="d-flex align-items-center justify-content-center my-5">
            <Col xs={12} md={6} className="text-center text-md-left mb-4 mb-md-0">
              <Image src="/slide4.jpg" rounded fluid className="aboutus-image" />
            </Col>
            <Col xs={12} md={6} className="text-center text-md-left">
              <h2 className="aboutus-title">Sustainability Meets Uniqueness</h2>
              <p className="aboutus-text">
                Choosing handmade is also a choice for sustainability. Unlike mass-produced goods, handmade items 
                often use natural, eco-friendly materials and small-batch production methods. Each product is <span className="highlight">one-of-a-kind</span>, 
                giving you something truly special that you won’t find anywhere else.
              </p>
            </Col>
          </Row>

          {/* Call to Action */}
          <Row className="d-flex align-items-center justify-content-center my-5">
            <Col xs={12} className="text-center">
              <h2 className="aboutus-title">Join the Handmade Revolution</h2>
              <p className="aboutus-text">
                Explore our collection of handmade goods and become a part of the movement that values creativity, 
                quality, and individuality. Discover items that speak to you and bring home more than just a product – 
                bring home a piece of art.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
