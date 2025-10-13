import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArchitectsLinkedInAd from "./images/Architects registration board.png";
import GamblingAuthorityLinkedInAd from "./images/Gambling Commission.png";
import NOCLinkedInAd from "./images/NOC.png";
import PoliceCareLinkedInAd from "./images/Police Care.png";
import HighSchoolAd from "./images/High School of Dundee.png";
import KirkleesLinkedInAd from "./images/Kirklees council-2.png";
import SolicitorsAssociationAd from "./images/Solicitors Association.png";
import PeterboroughCouncilAd from "./images/Peterborough Council.png";
import CreativeUKAd from "./images/Creative UK.png";
import "aos/dist/aos.css";

function LinkedInMJAds() {
  useEffect(() => {
    document.body.classList.add("project-gallery-bg");
    return () => {
      document.body.classList.remove("project-gallery-bg");
    };
  }, []);

  return (
    <section aria-labelledby="gallery-title">
      <Container id="linkedin-mj-ads" className="project-gallery-container">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 id="gallery-title" className="subHeading mb-4">
              LinkedIn and MJ Ads Portfolio
            </h2>
            <p className="lead mb-5">
              Here are some examples of LinkedIn ads and print designs I've created for various clients. These designs showcase my ability to create visually
              appealing and effective marketing materials that communicate the desired message and engage the target audience.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <img src={ArchitectsLinkedInAd} alt="LinkedIn Ad 1" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={GamblingAuthorityLinkedInAd} alt="LinkedIn Ad 2" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={NOCLinkedInAd} alt="LinkedIn Ad 3" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={PoliceCareLinkedInAd} alt="LinkedIn Ad 4" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={HighSchoolAd} alt="LinkedIn Ad 5" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={KirkleesLinkedInAd} alt="LinkedIn Ad 6" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={SolicitorsAssociationAd} alt="LinkedIn Ad 7" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={CreativeUKAd} alt="LinkedIn Ad 8" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src={PeterboroughCouncilAd} alt="LinkedIn Ad 9" className="img-fluid rounded shadow-sm" />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <h3 className="subHeading mb-4">Print Designs</h3>
            <p className="lead mb-5">
              Below are some print designs I've created for various clients. These designs demonstrate my skills in layout, typography, and visual hierarchy to
              create compelling print materials.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <img src="https://via.placeholder.com/300x200.png?text=Print+Ad+1" alt="Print Ad 1" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src="https://via.placeholder.com/300x200.png?text=Print+Ad+2" alt="Print Ad 2" className="img-fluid rounded shadow-sm" />
          </Col>
          <Col md={4} className="mb-4">
            <img src="https://via.placeholder.com/300x200.png?text=Print+Ad+3" alt="Print Ad 3" className="img-fluid rounded shadow-sm" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LinkedInMJAds;
