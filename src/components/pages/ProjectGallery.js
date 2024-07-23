// Import required modules
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        <h2 id="gallery-title" className="gallery-title">
          Past Projects
        </h2>
        <Row xs={1} sm={1} md={2} className="g-4">
          {props.projects ? (
            props.projects.map((project) => (
              <Col key={project.id}>
                <article className="card h-100">
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={project.title} />
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
                        <a
                          href={project.githubUrl}
                          className="btn btn-github"
                          target="_blank"
                          rel="noopener noreferrer">
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
