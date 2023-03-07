import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProjectGallery from './ProjectGallery';

function Contact(props) {
  return (
    <div className="contact-container my-5">
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h1 className="text-center mb-5">Contact me</h1>
          <h2>My Name</h2>
          <p>Tamara Joniec</p>
          <h2>Links</h2>
          <ul className="list-unstyled mb-0">
            <li className="my-2">
              <a href="https://github.com/TamaraJoniec" className="text-decoration-none text-primary">
                <i className="fab fa-github me-2"></i>GitHub Profile
              </a>
            </li>
            <li className="my-2">
              <a href="https://www.linkedin.com/in/tamara-joniec/" className="text-decoration-none text-primary">
                <i className="fab fa-linkedin me-2"></i>LinkedIn Page
              </a>
            </li>
            <li className="my-2">
              <a href="https://tamarajoniec.github.io/Bootstrap-Portfolio/assets/images/WebdeveloperTamara_Joniec_Resume_2.pdf" download className="text-decoration-none text-primary">
                <i className="fas fa-file-pdf me-2"></i>Download Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
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
