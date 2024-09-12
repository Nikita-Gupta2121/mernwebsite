import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Section1() {
  const gsapref = useRef();

  useGSAP(() => {
    gsap.from(gsapref.current, {
      y: 600,
      duration: 2,
      delay: 1,
    });
  });

  return (
    <div className="section1" style={{ position: 'relative', zIndex: 1 }}>
      <div className="background-overlay"></div>
      <Container className="content">
        <Row>
          <Col xs={12} md={10} lg={8}>
            <h1
              ref={gsapref}
              style={{ fontSize: '70px', paddingLeft: '90px', paddingBottom: '70px' }}
            >
              <span style={{ fontSize: '70px', color: 'red' }}>Welcome<br /></span> To <br />Hastkala <br />Heaven
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
