// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Footer = () => (
  <footer className="bg-dark text-white text-center py-4">
    <Container>
      <Row className="align-items-center">
        <Col md={4}>
          <p>&copy; 2023 My Portfolio</p>
        </Col>
        <Col md={4}>
          <p>Designed & Developed by Sruthi</p>
        </Col>
        <Col md={4}>
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0 me-3">Follow me on:</p>
            <a href="mailto:sruthigsruthi7com" className="text-white mx-2">
              <FaEnvelope size={30} />
            </a>
            <a href="https://github.com/sruthi0707" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/gurvindapalli-sruthi-89662422b/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaLinkedin size={30} />
            </a>
            
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
