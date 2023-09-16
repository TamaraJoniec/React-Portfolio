// Import required modules
import React from "react";
import { Col, Container, Row } from "react-bootstrap"; // Import the required Bootstrap components
import ProjectsData from "./ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome icons
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function ProjectGallery(props) {
  
  return (
    <Container>
      <Row xs={1} sm={2} md={3} className="g-4">
        {props.projects ? (
          props.projects.map((project) => (
            <Col key={project.id}>
              <div className="card h-100 shadow" >
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="btn-container">
                    <a
                      href={project.deployedUrl}
                      className="btn btn-visit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="btn btn-github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github mr-2"></i>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </Row>
    </Container>
  );
}

export default ProjectGallery;
