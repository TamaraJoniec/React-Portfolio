import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home-container">
      <Container fluid className="gradient-background py-5">
        <Row>
          <Col>
            <h1 className="text-center text-light mb-4">Welcome</h1>
            <h2 className="text-center text-light mb-5">Explore my portfolio and discover web design from my perspective.</h2>
            <div className="text-center">
              <button className="btn btn-lg btn-secondary mx-2">View Portfolio</button>
              <button className="btn btn-lg btn-outline-light mx-2">Contact Me</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
