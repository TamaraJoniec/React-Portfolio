// Import required modules
import React from "react";
import { Col, Container, Row } from "react-bootstrap"; // Import the required Bootstrap components
import projectsData from "../pages/ProjectsData";

// Define project gallery component
function ProjectGallery(props) {
  return (
    // Render project gallery grid
    <Container>
      {/* Use a Bootstrap container to wrap the gallery */}
      <Row xs={1} sm={2} md={3} className="g-4">
        {/* Use a Bootstrap row to create a responsive grid of columns */}
        {props.projects
          ? props.projects.map((project) => (
              <Col key={project.id}>
                {/* Use a Bootstrap col for each project */}
                <div className="card h-100 shadow">
                  {/* Use a Bootstrap card component to display the project */}
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={project.title}
                  />
                  {/* Use a Bootstrap image component for the project */}
                  <div className="card-body">
                    {/* Use a Bootstrap card body to display the project title and description */}
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.deployedUrl} className="btn btn-primary">
                      Visit Site
                    </a>
                  </div>
                </div>
              </Col>
            ))
          : ""}
      </Row>
    </Container>
  );
}

export default ProjectGallery;
