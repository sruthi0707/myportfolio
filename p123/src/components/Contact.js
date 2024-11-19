// src/components/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section
    id="contact"
    className="py-5"
    style={{
      background: 'linear-gradient(90deg, #8A5DB2, #FFC04C, #FFA07A, #8A5DB2)', // Softer medium colors
      padding: '50px 0',
    }}
  >
    <Container>
      <h2 className="text-center mb-4" style={{ color: '#FDFDFD' }}><b>Contact Me</b></h2>
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label style={{ color: '#FDFDFD' }}><b>Name</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            style={{
              background: 'rgba(255, 255, 255, 0.15)', // Softer white background
              border: '1px solid #CCCCCC',
              color: '#333333',
              padding: '10px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.8)')}
            onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.15)')}
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label style={{ color: '#FDFDFD' }}><b>Email</b></Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            style={{
              background: 'rgba(255, 255, 255, 0.15)', // Softer white background
              border: '1px solid #CCCCCC',
              color: '#333333',
              padding: '10px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.8)')}
            onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.15)')}
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label style={{ color: '#FDFDFD' }}><b>Message</b></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            style={{
              background: 'rgba(255, 255, 255, 0.15)', // Softer white background
              border: '1px solid #CCCCCC',
              color: '#333333',
              padding: '10px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.8)')}
            onBlur={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.15)')}
          />
        </Form.Group>
        <div className="text-center">
        <Button
            variant="black"
            type="submit"
            style={{
              background: 'orange',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.background = 'purple')}
            onMouseLeave={(e) => (e.target.style.background = 'yellow')}
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  </section>
);

export default Contact;
