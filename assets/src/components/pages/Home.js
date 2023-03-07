import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <Container fluid className="gradient-background py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h1 className="text-center text-light mb-4">Welcome</h1>
            <h2 className="text-center text-light mb-5">Explore my portfolio and discover web design from my perspective.</h2>
            <div className="d-flex justify-content-center">
              {/* Link to the project gallery */}
              <Link to="/React-Portfolio/project-gallery/">
                <button className="btn btn-lg btn-secondary mx-2">View Portfolio</button>
              </Link>
              {/* Link to the contact page */}
              <Link to="/React-Portfolio/contact/">
                <button className="btn btn-lg btn-outline-light mx-2">Contact Me</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h3>What I Do</h3>
            <p className="lead">I'm a web designer and developer based in the U.K. I create beautiful, responsive websites that look great on any device.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <i className="bi bi-code-slash display-1 mb-4"></i>
            <h4>Web Design</h4>
            <p>I design beautiful and intuitive user interfaces that make websites easy to use and navigate.</p>
          </Col>
          <Col md={4} className="text-center">
            <i className="bi bi-laptop display-1 mb-4"></i>
            <h4>Web Development</h4>
            <p>I build responsive and fast-loading websites using modern web technologies like HTML, CSS, and JavaScript.</p>
          </Col>
        </Row>
      </Container>
      {/* Projects section */}
      <Container fluid className="bg-light py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h3>Recent Projects</h3>
            <p className="lead">Here are some of my recent projects. Click on a project to learn more about it.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Project card 1 */}
          <Col md={4} className="text-center mb-4">
            <div className="project-card">
              <div className="project-card-overlay">
                <h5>Daily Planner</h5>
                <p>Project Description</p>
              </div>
              <img src="https://picsum.photos/400/300" alt="Project Title" className="img-fluid" />
            </div>
          </Col>
          {/* Project card 2 */}
          <Col md={4} className="text-center mb-4">
            <div className="project-card">
              <div className="project-card-overlay">
                <h5>Daily Horoscope</h5>
                <p>Project Description</p>
              </div>
              <img src="https://picsum.photos/400/300" alt="Project Title" className="img-fluid" />
            </div>
          </Col>
          {/* Project card 3 */}
          <Col md={4} className="text-center mb-4">
            <div className="project-card">
              <div className="project-card-overlay">
                <h5>Furniture Store</h5>
                <p>Project Description</p>
              </div>
              <img src="https://picsum.photos/400/300" alt="Project Title" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
