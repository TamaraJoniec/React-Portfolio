import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";
import projectsData from "./ProjectsData";
import Button from "react-bootstrap/Button";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    document.title = "Home - Tamara's Portfolio";
        document.body.classList.add("project-gallery-bg");
    return () => {
      document.body.classList.remove("project-gallery-bg");
    };
  }, []);

  return (
    <div>
      <Container fluid className="home-container py-5 h-1/2">
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            <h1 className="intro text-center text-light mb-4">Hi, I'm Tamara</h1>
            <h2 className=" text-center text-light mb-5">I'm a graphic designer and web developer based in the U.K.</h2>
            <div className="d-flex justify-content-center nav">
              <Link to="/project-gallery/" aria-label="View my project portfolio">
                <Button className="btn btn-lg btn-secondary mx-2">View Portfolio</Button>
              </Link>
              <Link to="/contact/" aria-label="Contact me">
                <Button className="btn btn-lg btn-outline-light mx-2" variant="outline-light">
                  Contact Me
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="about" className="py-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h3 className="subHeading">What I Do</h3>
            <p className="lead">
              I craft beautiful, responsive websites that deliver seamless experiences across all devices. I deliver impactful digital experiences across web,
              campaigns, and creative assets.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-center mb-5">
            <i className="bi bi-brush display-1 mb-4" aria-hidden="true"></i>
            <h4 className="subHeading">Graphic Design</h4>
            <p className="lead">
              I create visually stunning designs that effectively communicate your brand's message with marketing materials and social media graphics. View my{" "}
              <Link to="/linkedin-mj-ads/" aria-label="View my LinkedIn and MJ ads portfolio" className="text-white">
                LinkedIn ad and MJ print designs
              </Link>
              .
            </p>
          </Col>
          <Col md={8} className="text-center">
            <i className="bi bi-laptop display-1 mb-4" aria-hidden="true"></i>
            <h4 className="subHeading">Web Design and Development</h4>
            <p className="lead">
              I build responsive and fast-loading websites using modern web technologies like HTML/CSS3, JavaScript, React, Vue, Tailwind and CMRs like
              Wordpress and Drupal.
            </p>
          </Col>
        </Row>
      </Container>
      <ProjectGallery projects={projectsData} />
    </div>
  );
}

export default Home;
