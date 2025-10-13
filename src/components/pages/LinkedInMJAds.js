import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ArchitectsLinkedInAd from "./images/Architects registration board.png";
import GamblingAuthorityLinkedInAd from "./images/Gambling Commission.png";
import NOCLinkedInAd from "./images/NOC.png";
import PoliceCareLinkedInAd from "./images/Police Care.png";
import HighSchoolAd from "./images/High School of Dundee.png";
import KirkleesLinkedInAd from "./images/Kirklees council-2.png";
import SolicitorsAssociationAd from "./images/Solicitors Association.png";
import PeterboroughCouncilAd from "./images/Peterborough Council.png";
import CreativeUKAd from "./images/Creative UK.png";
import CamdenMJPrintAd from "./images/Camden Half page MJ.png";
import BoltonCouncil from "./images/Bolton Council.png";
import BasildonPrintAd from "./images/Basildon Half page MJ.png";
import TamworthPrintAd from "./images/Tamworth Half page MJ.png";

import "aos/dist/aos.css";

// Lightbox component
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1050,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}>
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: 32,
          right: 40,
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "2.5rem",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 1100,
          lineHeight: 1,
        }}>
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          boxShadow: "0 0 32px #000",
          borderRadius: "8px",
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function LinkedInMJAds() {
  useEffect(() => {
    document.body.classList.add("project-gallery-bg");
    return () => {
      document.body.classList.remove("project-gallery-bg");
    };
  }, []);

  const [lightboxImg, setLightboxImg] = useState(null);

  // Helper to render image columns with lightbox
  function renderImg(src, alt) {
    return (
      <Col md={4} className="mb-4">
        <img src={src} alt={alt} className="img-fluid rounded shadow-sm" style={{ cursor: "pointer" }} onClick={() => setLightboxImg({ src, alt })} />
      </Col>
    );
  }

  return (
    <section aria-labelledby="gallery-title">
      <Container id="linkedin-mj-ads" className="project-gallery-container">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 id="gallery-title" className="subHeading mb-4">
              LinkedIn and MJ Ads Portfolio
            </h2>
            <p className="lead mb-5">
              Welcome to my portfolio showcasing a selection of LinkedIn ads and MJ print advertisements I've designed for various clients. My work focuses on
              creating visually appealing and effective advertisements that capture the essence of each brand while engaging their target audience.
            </p>
            <Button variant="outline-light" href="#print-ads" className="tn btn-lg btn-outline-light mx-2">
              See Print Ads for the MJ magazine
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Row className="justify-content-center mt-5">
            <Col md={8} className="text-center">
              <h3 className="subHeading mb-4">LinkedIn Ad Designs</h3>
              <p className="lead mb-5">
                Below are some LinkedIn ads I've created for various clients. These ads demonstrate my skills in digital design, branding, and creating engaging
                content for social media platforms.
              </p>
            </Col>
          </Row>
          {renderImg(ArchitectsLinkedInAd, "LinkedIn Ad 1")}
          {renderImg(GamblingAuthorityLinkedInAd, "LinkedIn Ad 2")}
          {renderImg(NOCLinkedInAd, "LinkedIn Ad 3")}
          {renderImg(PoliceCareLinkedInAd, "LinkedIn Ad 4")}
          {renderImg(HighSchoolAd, "LinkedIn Ad 5")}
          {renderImg(KirkleesLinkedInAd, "LinkedIn Ad 6")}
          {renderImg(SolicitorsAssociationAd, "LinkedIn Ad 7")}
          {renderImg(CreativeUKAd, "LinkedIn Ad 8")}
          {renderImg(PeterboroughCouncilAd, "LinkedIn Ad 9")}
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
        <Row id="print-ads" className="justify-content-center">
          <Col md={6} className="mb-4">
            <img
              src={CamdenMJPrintAd}
              alt="Print Ad 1"
              className="img-fluid rounded shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => setLightboxImg({ src: CamdenMJPrintAd, alt: "Print Ad 1" })}
            />
          </Col>
          <Col md={6} className="mb-4">
            <img
              src={BoltonCouncil}
              alt="Print Ad 2"
              className="img-fluid rounded shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => setLightboxImg({ src: BoltonCouncil, alt: "Print Ad 2" })}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="mb-4">
            <img
              src={BasildonPrintAd}
              alt="Print Ad 3"
              className="img-fluid rounded shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => setLightboxImg({ src: BasildonPrintAd, alt: "Print Ad 3" })}
            />
          </Col>
          <Col md={6} className="mb-4">
            <img
              src={TamworthPrintAd}
              alt="Print Ad 4"
              className="img-fluid rounded shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => setLightboxImg({ src: TamworthPrintAd, alt: "Print Ad 4" })}
            />
          </Col>
        </Row>
        {lightboxImg && <Lightbox src={lightboxImg.src} alt={lightboxImg.alt} onClose={() => setLightboxImg(null)} />}
      </Container>
    </section>
  );
}

export default LinkedInMJAds;
