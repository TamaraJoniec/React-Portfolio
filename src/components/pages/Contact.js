import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact-container">
        <address className="contact-info">
          <h1 className="display-4 mb-4">Contact info</h1>
          <h2>Hello, I'm</h2>
          <h1>Tamara Joniec</h1>
          <ul className="list-unstyled lead">
            <li className="my-2">
              <a
                href="https://github.com/TamaraJoniec"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-primary"
                style={{ display: "flex", alignItems: "center" }}
                aria-label="GitHub Profile (opens in new window)">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="link me-2"
                  style={{ fontSize: "24px", color: "white" }}
                  aria-hidden="true"
                />
                <span className="visually-hidden">GitHub Profile</span>
                <span style={{ fontSize: "20px", color: "white" }}>
                  GitHub Profile
                </span>
              </a>
            </li>
            <li className="my-2">
              <a
                href="https://www.linkedin.com/in/tamara-joniec/"
                rel="noreferrer"
                target="_blank"
                className="text-decoration-none text-primary"
                style={{ display: "flex", alignItems: "center" }}
                aria-label="LinkedIn Page (opens in new window)">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="link me-2"
                  style={{ fontSize: "24px", color: "white" }}
                  aria-hidden="true"
                />
                <span className="visually-hidden">LinkedIn Page</span>
                <span style={{ fontSize: "20px", color: "white" }}>
                  LinkedIn Page
                </span>
              </a>
            </li>
            <li className="my-2">
              <a
                href="https://drive.google.com/file/d/1NPU7LhEdwc5OcASECj24n3-6mVRregbs/view?usp=share_link"
                rel="noreferrer"
                download
                target="_blank"
                className="text-decoration-none text-primary"
                style={{ display: "flex", alignItems: "center" }}
                aria-label="Download CV (opens in new window)">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="link me-2"
                  style={{ fontSize: "24px", color: "white" }}
                  aria-hidden="true"
                />
                <span className="visually-hidden">Download CV</span>
                <span style={{ fontSize: "20px", color: "white" }}>
                  Download CV
                </span>
              </a>
            </li>
          </ul>
        </address>
    </div>
  );
}

export default Contact;
