import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact(props) {
  return (
    <div className="contact-container my-5">
      <div className="row">
        <div className="contact-info text-white col-lg-6 mb-5">
          <h1 className="display-4 mb-4">Contact info</h1>
          <h2>Hello, I'm</h2>
          <h1>Tamara Joniec</h1>
          {/* React icons instead of text for the links */}
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}></h2>
          <ul className="list-unstyled lead">
            <li className="my-2">
              <a href="https://github.com/TamaraJoniec" className="text-decoration-none text-primary" style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faGithub} className="link me-2" style={{ fontSize: '24px', color: 'white' }} /><span style={{ fontSize: '20px', color: 'white' }}>GitHub Profile</span>
              </a>
            </li>
            <li className="my-2">
              <a href="https://www.linkedin.com/in/tamara-joniec/" className="text-decoration-none text-primary" style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faLinkedin} className="link me-2" style={{ fontSize: '24px', color: 'white' }} /><span style={{ fontSize: '20px', color: 'white' }}>LinkedIn Page</span>
              </a>
            </li>
            <li className="my-2">
              <a href="https://tamarajoniec.github.io/Bootstrap-Portfolio/assets/images/WebdeveloperTamara_Joniec_Resume_2.pdf" download className="text-decoration-none text-primary" style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faFilePdf} className="link me-2" style={{ fontSize: '24px', color: 'white' }} /><span style={{ fontSize: '20px', color: 'white' }}>Download Resume (PDF)</span>
              </a>
            </li>
          </ul>



        </div>
        {/* Form */}
        <div className="col-lg-6 mb-5">
          <h2>Get in touch</h2>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
