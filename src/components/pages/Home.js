import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ProjectGallery from './ProjectGallery';
import projectsData from './ProjectsData';
import Button from 'react-bootstrap/Button';
import 'aos/dist/aos.css';

function Home() {
  return (
    <div>
      <Container fluid className="home-container py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h1 className="intro text-center text-light mb-4">Hi, I'm Tamara</h1>
            <h2 className=" text-center text-light mb-5">I'm a web developer based in the U.K.</h2>
            <div className="d-flex justify-content-center nav">
              {/* Link to the project gallery */}
              <Link to="/project-gallery/">
                <Button className="btn btn-lg btn-secondary mx-2">View Portfolio</Button>
              </Link>
              {/* Link to the contact page */}
              <Link to="/contact/">
                <Button className="btn btn-lg btn-outline-light mx-2" variant="outline-light">Contact Me</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="about" className="py-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h3 className='subHeading'>What I Do</h3>
            <p className="lead">I'm a web designer and developer based in the U.K. I create beautiful, responsive websites that look great on any device.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <i className="bi bi-code-slash display-1 mb-4"></i>
            <h4 className='subHeading'>Web Design</h4>
            <p>I design beautiful and intuitive user interfaces that make websites easy to use and navigate.</p>
          </Col>
          <Col md={4} className="text-center">
            <i className="bi bi-laptop display-1 mb-4"></i>
            <h4 className='subHeading'>Web Development</h4>
            <p>I build responsive and fast-loading websites using modern web technologies like React, Vue, and Tailwind CSS.</p>
          </Col>
        </Row>
      </Container>
      {/* Projects section */}
      <ProjectGallery projects={projectsData} />
    </div >
  );
}

export default Home;
