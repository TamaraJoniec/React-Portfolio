// Import required modules
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import edenProjectImage from "./images/eden-project.jpg";
import chathamHouseImage from "./images/chatham-house.png";
import jrfImage from "./images/jrf.png";
import SandwellCouncilImage from "./images/sandwell-council.png";
import EssexCouncilImage from "./images/essex-leaders.png";
import SironaAppointmentsImage from "./images/sirona-appointments.png";
import HerefordshireImage from "./images/herefordshire-council.png";
import NorthMidlandsImage from "./images/uhnm.png";
import HighSchoolDundeeImage from "./images/hsd.png";

import "aos/dist/aos.css";

function ProjectGallery(props) {
  useEffect(() => {
    document.body.classList.add("project-gallery-bg");
    return () => {
      document.body.classList.remove("project-gallery-bg");
    };
  }, []);

  return (
    <section aria-labelledby="gallery-title">
      <Container id="project-gallery" className="project-gallery-container">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 id="gallery-title" className="gallery-title">
              Recruitment websites for GatenbySanderson
            </h2>
          </Col>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            <Col>
              <article className="card h-100 mt-4">
                <img src={SandwellCouncilImage} className="card-img-top" alt="Sandwell Council website" />
                <div className="card-body">
                  <h3 className="card-title">Sandwell Council</h3>
                  <div className="btn-container">
                    <a
                      href="https://join-sandwell.co.uk/"
                      //DEV LINK href="https://sandwell-council.gs-microsites.net/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Sandwell Council's recruitment website (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
            <Col>
              <article className="card h-100 mt-4">
                <img src={EssexCouncilImage} className="card-img-top" alt="Essex Council website" />
                <div className="card-body">
                  <h3 className="card-title">Essex Council</h3>
                  <div className="btn-container">
                    <a
                      href="https://essex-leaders.co.uk/"
                      //DEV LINK href="https://essex-council.gs-microsites.net/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Essex Council's recruitment website (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
            <Col>
              <article className="card h-100 mt-4">
                <img src={SironaAppointmentsImage} className="card-img-top" alt="Sirona Care & Health website" />
                <div className="card-body">
                  <h3 className="card-title">Sirona Care & Health Appointments</h3>
                  <div className="btn-container">
                    <a
                      href="https://sirona-appointments.co.uk/"
                      //DEV LINK href="https://sirona-care.gs-microsites.net/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Sirona care and health's recruitment website (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
            <Col>
              <article className="card h-100 mt-4">
                <img src={HerefordshireImage} className="card-img-top" alt="Herefordshire Council website" />
                <div className="card-body">
                  <h3 className="card-title">Herefordshire Council</h3>
                  <div className="btn-container">
                    <a
                      href="https://join-herefordshire.co.uk/"
                      //DEV LINK href="https://herefordshire.gs-microsites.net/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Herefordshire council's recruitment website (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
            <Col>
              <article className="card h-100 mt-4">
                <img src={HighSchoolDundeeImage} className="card-img-top" alt="Barking Riverside Ltd. website" />
                <div className="card-body">
                  <h3 className="card-title">The High School of Dundee</h3>
                  <div className="btn-container">
                    <a
                      href="https://hsdrector.co.uk/"
                      //DEV LINK href="https://high-school-of-dundee.gs-microsites.net/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit the High School of Dundee's recruitment website (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
            <Col>
              <article className="card h-100 mt-4">
                <img src={NorthMidlandsImage} className="card-img-top" alt="University Hospitals of North Midlands NHS Trust website" />
                <div className="card-body">
                  <h3 className="card-title">University Hospitals of North Midlands NHS Trust</h3>
                  <div className="btn-container">
                    <a
                      href="https://uhnm-appointments.co.uk/"
                      //DEV LINK href="https://uhnm.gs-microsites.net/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit University Hospitals of North Midlands NHS Trust's recruitment website (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
          </Row>
          <Col md={8} className="text-center">
            <h2 id="gallery-title" className="gallery-title">
              Projects at Numiko
            </h2>
          </Col>
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            <Col>
              <article className="card h-100 mt-4">
                <img src={edenProjectImage} className="card-img-top" alt="Eden Project Booking Engine" />
                <div className="card-body">
                  <h3 className="card-title">Eden Project Booking Engine</h3>
                  <div className="btn-container">
                    <a
                      href="https://www.edenproject.com/visit/book-tickets"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Eden Project (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
            <Col>
              <article className="card h-100 mt-4">
                <img src={chathamHouseImage} className="card-img-top" alt="Chatham House sliders" />
                <div className="card-body">
                  <h3 className="card-title">Chatham House | Sliders</h3>
                  <div className="btn-container">
                    <a
                      href="https://www.chathamhouse.org/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Chatham House (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
            <Col>
              <article className="card h-100 mt-4">
                <img src={jrfImage} className="card-img-top" alt="Joseph Rowntree Foundation" />
                <div className="card-body">
                  <h3 className="card-title">JRF</h3>
                  <div className="btn-container">
                    <a
                      href="https://www.jrf.org.uk/"
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Joseph Rowntree Foundation (opens in new window)">
                      Visit Site
                    </a>
                  </div>
                </div>
              </article>
            </Col>
          </Row>
        </Row>
        <h2 id="gallery-title" className="gallery-title">
          Past Projects
        </h2>
        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
          {props.projects ? (
            props.projects.map((project) => (
              <Col key={project.id}>
                <article className="card h-100">
                  <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <div className="btn-container">
                      <a
                        href={project.deployedUrl}
                        className="btn btn-visit"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} (opens in new window)`}>
                        Visit Site
                      </a>
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="btn btn-github" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Col>
            ))
          ) : (
            <p>No projects to display.</p>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectGallery;
