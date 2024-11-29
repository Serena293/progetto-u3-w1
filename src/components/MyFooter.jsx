import React from "react";
import facebook from '../assets/Icons/facebook.svg'
import twitter from '../assets/Icons/twitter.svg'
import instagram from '../assets/Icons/instagram.svg'
import youtube from '../assets/Icons/youtube.svg'


const MyFooter = () => {
  return (
    <footer className="text-muted">
      <div className="d-flex justify-content-center">
        {/* Social Media Icons */}
        <div className="d-flex">
          <img src={facebook} className="m-1" alt="Facebook" />
          <img src={instagram} className="m-1" alt="Instagram" />
          <img src={twitter} className="m-1" alt="Twitter" />
          <img src={youtube} className="m-1" alt="YouTube" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex flex-column m-2">
          <a href="#a" className="text-secondary text-decoration-none">
            Audio and Subtitle
          </a>
          <a href="#a" className="text-secondary text-decoration-none">
            Media Center
          </a>
          <a href="#a" className="text-secondary text-decoration-none">Privacy</a>
          <a href="#a" className="text-secondary text-decoration-none">Contact Us</a>
        </div>
        <div className="d-flex flex-column m-2">
          <a href="#a" className="text-secondary text-decoration-none">
            Audio Description
          </a>
          <a href="#a" className="text-secondary text-decoration-none">
            Investor Relations
          </a>
          <a href="#a" className="text-secondary text-decoration-none">
            Legal Notices
          </a>
        </div>
        <div className="d-flex flex-column m-2">
          <a href="#a" className="text-secondary text-decoration-none">
            Help Center
          </a>
          <a href="#a" className="text-secondary text-decoration-none">Jobs</a>
          <a href="#a" className="text-secondary text-decoration-none">
            Cookies Preferences
          </a>
        </div>
        <div className="d-flex flex-column m-2">
          <a href="#a" className="text-secondary text-decoration-none">
            Gift Cards
          </a>
          <a href="#a" className="text-secondary text-decoration-none">
            Terms of Use
          </a>
          <a href="#a" className="text-secondary text-decoration-none">
            Corporate Information
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
