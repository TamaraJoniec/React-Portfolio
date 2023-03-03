// Import required modules
import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap"; // Import the required Bootstrap components


// Define project gallery component
function ProjectGallery(props) {

  // Render project gallery grid
  <Container>
      {/* Use a Bootstrap container to wrap the gallery */}
      <Row xs={1} sm={2} md={3} className="g-4">
        {/* Use a Bootstrap row to create a responsive grid of columns */}
        {props.projects.map((project) => (
          <Col key={project.id}>
            {/* Use a Bootstrap col for each project */}
            <div className="card h-100">
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
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
}


// Define prop types for ProjectGallery component
ProjectGallery.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectGallery;
