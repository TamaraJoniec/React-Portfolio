import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectGallery from "./ProjectGallery";

function Project(props) {
  const { projectId } = props.match.params; // Get the projectId from the router params
  const project = props.projects.find((p) => p.id === projectId); // Find the project data by its ID

  if (!project) {
    // If the project does not exist, show a message
    return (
      <Container>
        <h1>Project not found!</h1>
        <p>Please select a valid project from the list.</p>
      </Container>
    );
  }

  const { title, deployedUrl, githubUrl, imageUrl, description } = project; // Destructure the project data for easier access

  return (
    <Container>
      {/* Use a Bootstrap container to wrap the project page */}
      <h1>{title}</h1>
      <Row>
        <Col md={8}>
          {/* Use a Bootstrap row and column to display the project information */}
          <img src={imageUrl} alt={title} className="img-fluid mb-3" />
          <p>{description}</p>
          <p>
            This project is deployed at{" "}
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
              {deployedUrl}
            </a>
            .
          </p>
          <p>
            The source code is available at{" "}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              {githubUrl}
            </a>
            .
          </p>
        </Col>
        <Col md={4}>
          <ProjectGallery projects={props.projects} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Link to="/">Back to projects</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
