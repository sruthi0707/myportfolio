// src/components/Skills.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaHtml5, FaPython, FaLinux, FaCss3, FaJs, FaGithub, FaGitlab, FaDatabase, FaMicrosoft, FaFileExcel, FaWordpress, FaFilePowerpoint, FaBootstrap } from 'react-icons/fa';

const Skills = () => (
  <section
    id="skills"
    className="py-5"
    style={{
      background: 'linear-gradient(90deg, rgba(128,0,128,0.3), rgba(255,255,0,0.3), rgba(255,165,0,0.3), rgba(128,0,128,0.3))',
      padding: '50px 0',
    }}
  >
    <Container>
      <h2 className="text-center mb-4"><b>Skills</b></h2>
      <Row>
        <Col md={2} className="text-center">
          <FaReact size={40} />
          <p>React</p>
        </Col>
        <Col md={2} className="text-center">
          <FaNodeJs size={40} />
          <p>Node.js</p>
        </Col>
        <Col md={2} className="text-center">
          <FaBootstrap size={40} />
          <p>Bootstrap</p>
        </Col>
        <Col md={2} className="text-center">
          <FaHtml5 size={40} />
          <p>HTML</p>
        </Col>
        <Col md={2} className="text-center">
          <FaCss3 size={40} />
          <p>CSS</p>
        </Col>
        <Col md={2} className="text-center">
          <FaJs size={40} />
          <p>JavaScript</p>
        </Col>
        <Col md={2} className="text-center">
          <FaPython size={40} />
          <p>Python</p>
        </Col>
        <Col md={2} className="text-center">
          <FaLinux size={40} />
          <p>Linux</p>
        </Col>
        <Col md={2} className="text-center">
          <FaGithub size={40} />
          <p>Github</p>
        </Col>
        <Col md={2} className="text-center">
          <FaGitlab size={40} />
          <p>Gitlab</p>
        </Col>
        <Col md={2} className="text-center">
          <FaDatabase size={40} />
          <p>Database</p>
        </Col>
        <Col md={2} className="text-center">
          <FaMicrosoft size={40} />
          <p>MS-office</p>
        </Col>
        <Col md={2} className="text-center">
          <FaFileExcel size={40} />
          <p>MS-Excel</p>
        </Col>
        <Col md={2} className="text-center">
          <FaFilePowerpoint size={40} />
          <p>Powerpoint</p>
        </Col>
        <Col md={2} className="text-center">
          <FaWordpress size={40} />
          <p>Wordpress</p>
        </Col>

        {/* Add more skills here */}
      </Row>
    </Container>
  </section>
);

export default Skills;
