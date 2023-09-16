import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="">

      <Container fluid className="home-container py-5">
        
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h1 className="intro text-center text-light mb-4">Hi, I'm Tamara</h1>
            <h2 className=" text-center text-light mb-5">I'm a web developer based in the U.K.</h2>
            <div className="d-flex justify-content-center nav">
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
            <p>I build responsive and fast-loading websites using modern web technologies like HTML, CSS, and JavaScript.</p>
          </Col>
        </Row>
      </Container>
      {/* Projects section */}
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h3 className='subHeading'>Recent Projects</h3>
            <p className="lead">Click on a project to learn more.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Project card 1 */}
          <Col md={4} className="text-center mb-4">
            <a href="https://tamarajoniec.github.io/Daily-Planner/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="project-card">
                {/* Project card overlay with project title and description */}
                <div className="project-card-overlay">
                  <h5 className='subHeading'>Daily Planner</h5>
                </div>
                {/* Project image */}
                <img src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project Daily Planner" className="img-fluid" target="_blank" rel="noopener noreferrer" />
              </div>
            </a>
          </Col>
          {/* Project card 2 */}
          <Col md={4} className="text-center mb-4">
            <a href="https://clicky-game.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="project-card">
                {/* Project card overlay with project title and description */}
                <div className="project-card-overlay">
                  <h5 className='subHeading'>Clicky Game</h5>
                </div>
                {/* Project image */}
                <img src="https://github.com/TamaraJoniec/memory-game/raw/main/src/Screenshot.png" alt="Clicky Game" className="img-fluid" target="_blank" rel="noopener noreferrer" />
              </div>
            </a>
          </Col>
          {/* Project card 3 */}
          <Col md={4} className="text-center mb-4">
            <a href="https://tamarajoniec.github.io/Server-APIs-Weather-Dashboard/" className="img-fluid" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="project-card">
                {/* Project card overlay with project title and description */}
                <div className="project-card-overlay">
                  <h5 className='subHeading'>Weather Dashboard</h5>
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
