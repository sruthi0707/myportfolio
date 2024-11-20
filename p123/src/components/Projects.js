import React from "react";
import { Container, Carousel, Card, Button } from "react-bootstrap";

const Projects = () => (
  <section id="projects" className="py-5">
    <Container
      style={{
        maxWidth: "3000px", // Ensures container fits the website width
        margin: "0 auto", // Centers the container horizontally
        padding: "0 5px", // Adds some padding for smaller screens
      }}
    >
      <h2 className="text-center mb-4">
        <b>Projects</b>
      </h2>
      <Carousel interval={1800} pause="hover" indicators={false}>
        {/* Project 1 */}
        <Carousel.Item>
          <div
            style={{
              background: "linear-gradient(90deg, #8A5DB2, #FFC04C, #FFA07A, #8A5DB2)", // Updated gradient
              padding: "30px 0", // Slightly reduced padding
            }}
            className="text-center"
          >
            <Card
              className="mx-auto"
              style={{
                maxWidth: "400px",
                background: "rgba(255, 255, 255, 0.85)",
                border: "none",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "orange", fontWeight: "bold" }}>
                  Portfolio Website
                </Card.Title>
                <Card.Text style={{ color: "purple" }}>
                  Built a responsive portfolio website with React, showcasing
                  personal projects and skills with an interactive and clean
                  user interface.
                </Card.Text>
                <Button
                  variant="outline-light"
                  href="https://example.com"
                  style={{
                    background: "yellow",
                    borderColor: "orange",
                    color: "#000",
                  }}
                >
                  <b>View Project</b>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        {/* Project 2 */}
        <Carousel.Item>
          <div
            style={{
              background: "linear-gradient(90deg, #8A5DB2, #FFC04C, #FFA07A, #8A5DB2)", // Updated gradient
              padding: "30px 0",
            }}
            className="text-center"
          >
            <Card
              className="mx-auto"
              style={{
                maxWidth: "400px",
                background: "rgba(255, 255, 255, 0.85)",
                border: "none",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "orange", fontWeight: "bold" }}>
                  5G MIMO Antennas for MM Wave Applications
                </Card.Title>
                <Card.Text style={{ color: "purple" }}>
                  This focuses on the detection of 5G waves, which are useful
                  for 5G devices, using HFSS Software for high data rates
                  without affecting the environment. Presented at the 7th
                  International CMEET 2022 organized by Vishnu Institute of
                  Technology.
                </Card.Text>
                <Button
                  variant="outline-light"
                  href="https://example.com"
                  style={{
                    background: "yellow",
                    borderColor: "orange",
                    color: "#000",
                  }}
                >
                  <b>View Project</b>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        {/* Project 3 */}
        <Carousel.Item>
          <div
            style={{
              background: "linear-gradient(90deg, #8A5DB2, #FFC04C, #FFA07A, #8A5DB2)", // Updated gradient
              padding: "30px 0",
            }}
            className="text-center"
          >
            <Card
              className="mx-auto"
              style={{
                maxWidth: "400px",
                background: "rgba(255, 255, 255, 0.85)",
                border: "none",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "orange", fontWeight: "bold" }}>
                   Weather Detection
                </Card.Title>
                <Card.Text style={{ color: "purple" }}>
                 A simple web app that provides real-time weather updates based on the user's location. Built with HTML, CSS, and JavaScript, it fetches live weather data from an API and displays temperature, humidity, and weather conditions.
                </Card.Text>
                <Button
                  variant="outline-light"
                  href="https://github.com/sruthi0707/weather"
                  style={{
                    background: "yellow",
                    borderColor: "orange",
                    color: "#000",
                  }}
                >
                  <b>View Project</b>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
         {/* Project 4 */}
         <Carousel.Item>
          <div
            style={{
              background: "linear-gradient(90deg, #8A5DB2, #FFC04C, #FFA07A, #8A5DB2)", // Updated gradient
              padding: "30px 0",
            }}
            className="text-center"
          >
            <Card
              className="mx-auto"
              style={{
                maxWidth: "400px",
                background: "rgba(255, 255, 255, 0.85)",
                border: "none",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "orange", fontWeight: "bold" }}>
                  AI ChatBot
                </Card.Title>
                <Card.Text style={{ color: "purple" }}>
                This project features an AI-powered chatbot built for providing instant customer support on websites. The chatbot leverages Natural Language Processing (NLP) to understand and respond to user queries effectively, improving user engagement and satisfaction.
                </Card.Text>
                <Button
                  variant="outline-light"
                  href="https://github.com/sruthi0707/React-AI-Chatbot"
                  style={{
                    background: "yellow",
                    borderColor: "orange",
                    color: "#000",
                  }}
                >
                  <b>View Project</b>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

      </Carousel>
    </Container>
  </section>
);

export default Projects;
