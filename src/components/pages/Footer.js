import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer >
            <ul className="footer-icons">
                <a href="https://github.com/TamaraJoniec" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="link me-2" style={{ fontSize: '24px', color: 'white' }} /><span style={{ fontSize: '20px', color: 'white' }}></span></a>
                <a href="https://www.linkedin.com/in/tamara-joniec/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="link me-2" style={{ fontSize: '24px', color: 'white' }} /><span style={{ fontSize: '20px', color: 'white' }}></span>
                </a>
                <a href="https://drive.google.com/file/d/1NPU7LhEdwc5OcASECj24n3-6mVRregbs/view?usp=share_link" download rel="noreferrer" className="text-decoration-none text-primary" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faFilePdf} className="link me-2" style={{ fontSize: '24px', color: 'white' }} /><span style={{ fontSize: '20px', color: 'white' }}> Resume</span>
              </a>
            </ul>
            <p className='rights'>&copy; {new Date().getFullYear()} Tamara Joniec. All rights reserved.</p>
        </footer>
    );
}
export default Footer;