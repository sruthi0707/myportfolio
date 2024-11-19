import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.png'; // Import the image

const About = () => {
  const slideLeft = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideRight = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: 'linear-gradient(90deg, rgba(128,0,128,0.3), rgba(255,255,0,0.3), rgba(255,165,0,0.3), rgba(128,0,128,0.3))',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            {/* Slide effect for content */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={slideLeft}
            >
              <h2><b>About Me</b></h2>
              <p>
                I am a React developer specializing in building modern,
                responsive, and user-friendly web applications. With experience
                in both frontend and backend development, I create seamless
                user experiences and efficient server-side solutions. My skills
                include React, Node.js, and database management, enabling me to
                deliver reliable and scalable applications.
              </p>
            </motion.div>
          </Col>
          <Col md={6} className="text-md-right text-center">
             {/* Slide effect for image */}
          <motion.img
            src={profilePic}
            alt="My Profile"
            className="img-fluid rounded-circle"
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            variants={slideRight}
           />
         </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;
