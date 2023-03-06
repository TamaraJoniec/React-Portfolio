import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Project(props) {
  const { projectId } = props.match; // Get the projectId from the router params
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

  const { title, deployedUrl, githubUrl, imageUrl } = project; // Destructure the project data for easier access

  return (
    <Container>
      {/* Use a Bootstrap container to wrap the project page */}
      <h1>{title}</h1>
      <Row>
        <Col md={8}>
          {/* Use a Bootstrap row and column to display the project information */}
          <img src={imageUrl} alt={title} className="img-fluid mb-3" />
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
      </Row>
      <Row>
        <Col md={4}>
          <Link to="/">Back to projects</Link>
        </Col>
      </Row>
    </Container>
  );
}

// Project.propTypes = {
//   projects: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       deployedUrl: PropTypes.string.isRequired,
//       githubUrl: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       projectId: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default Project;