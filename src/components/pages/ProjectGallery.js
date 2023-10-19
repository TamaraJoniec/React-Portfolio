// Import required modules
import React, { useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap"; // Import the required Bootstrap components
import Footer from './Footer';
import 'aos/dist/aos.css';

function ProjectGallery(props) {
  useEffect(() => {
    document.body.classList.add("project-gallery-bg");
    return () => {
      document.body.classList.remove("project-gallery-bg");
    }
  }, []);

  return (
    <div>
    <Container id="project-gallery" className="project-gallery-container">
      <h2 className="gallery-title">Past Projects</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {props.projects ? (
          props.projects.map((project) => (
            <Col key={project.id}>
              <div className="card h-100">
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.title}
                />
                <h5 className="card-title">{project.title}</h5>
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
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </Row>
      <br />
      <br />
    </Container>
    <Footer />
    </div>
  );
}



export default ProjectGallery;
