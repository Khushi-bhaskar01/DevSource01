import React from "react";
import "./DevSourceContact.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DevSourceContact = () => {
  return (
    <section className="ds-contact-wrapper">
      <h2 className="ds-heading ds-contact-heading">
        Connect With DevSource
      </h2>

      <div className="ds-orb-card">
        <p className="ds-orb-text">
          Let's build the future together. Enter the DevSource network.
        </p>

        <div className="ds-orb-links">
          <a href="mailto:devsource46@gmail.com" className="ds-orb-btn">
            <MdEmail className="ds-icon" />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/DevSource-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="ds-orb-btn"
          >
             <FaGithub className="ds-icon" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/company/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="ds-orb-btn"
          >
            <FaLinkedinIn className="ds-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevSourceContact;
