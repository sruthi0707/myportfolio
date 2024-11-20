import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => (
  <>
    <style type="text/css">
      {`
        .nav-link-custom {
          color: #000; /* Default color */
          margin: 0 10px; /* Spacing between links */
          font-weight: bold;
          transition: color 0.3s ease; /* Smooth transition for hover effect */
        }

        .nav-link-custom:hover {
          color: white; /* Hover color */
        }
      `}
    </style>
    <Navbar expand="lg" sticky="top" style={{ background: "linear-gradient(90deg, purple, yellow, orange, purple)" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#000" }}><b>My Portfolio</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-link-custom"><b>About</b></Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom"><b>Projects</b></Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom"><b>Skills</b></Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom"><b>Contact</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default MyNavbar;
