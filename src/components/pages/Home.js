import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function Home() {
  return (
    
    <div>
      <Slider vertical={true} arrows={false} verticalSwiping={true} className="gradient-background py-5">
       
            <h1 className="text-center text-light mb-4">Hi, I'm Tamara.</h1>
            <h2 className="text-center text-light mb-5">Welcome, feel free to take a look around.</h2>
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
        
      </Slider>
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h3 className="sub-heading">What I Do</h3>
            <p className="lead">I'm a web designer and developer based in the U.K. I create beautiful, responsive websites that look great on any device.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <i className="bi bi-code-slash display-1 mb-4"></i>
            <h4 className="sub-heading">Web Design</h4>
            <p>I design beautiful and intuitive user interfaces that make websites easy to use and navigate.</p>
          </Col>
          <Col md={4} className="text-center">
            <i className="bi bi-laptop display-1 mb-4"></i>
            <h4 className="sub-heading">Web Development</h4>
            <p>I build responsive and fast-loading websites using modern web technologies like HTML, CSS, and JavaScript.</p>
          </Col>
        </Row>
      </Container>
      {/* Projects section */}
      <Container fluid className="bg-light py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h3 className="sub-heading">Recent Projects</h3>
            <p className="lead">Here are some of my recent projects. Click to learn more.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Project card 1 */}
          <Col md={4} className="text-center mb-4">
            <a href="https://tamarajoniec.github.io/Daily-Planner/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="project-card">
                {/* Project card overlay with project title and description */}
                <div className="project-card-overlay">
                  <h5 className="project-title">Daily Planner</h5>
                </div>
                {/* Project image */}
                <img src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project Daily Planner" className="img-fluid" target="_blank" rel="noopener noreferrer" />
              </div>
            </a>
          </Col>
        {/* Project card 2 */}
    <Col md={4} className="text-center mb-4">
    <a href="https://adeventastra.github.io/project1-piptambecten/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className="project-card">
        {/* Project card overlay with project title and description */}
        <div className="project-card-overlay">
          <h5 className="project-title">Daily Horoscope</h5>
        </div>
        {/* Project image */}
        <img src="https://images.pexels.com/photos/8584226/pexels-photo-8584226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project Horoscope" className="img-fluid" target="_blank" rel="noopener noreferrer" />
      </div>
      </a>
    </Col>
    {/* Project card 3 */}
    <Col md={4} className="text-center mb-4">
    <a href="https://tamarajoniec.github.io/Server-APIs-Weather-Dashboard/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className="project-card">
        {/* Project card overlay with project title and description */}
        <div className="project-card-overlay">
          <h5 className="project-title">Weather Dashboard</h5>
        </div>
        {/* Project image */}
        <img src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project Weather Dashboard" className="img-fluid" target="_blank" rel="noopener noreferrer" />
      </div>
      </a>
    </Col>
  </Row>
</Container>
    </div >
  );
}

export default Home;
