import React from 'react';
import '../css/support-feedback.css';
import discordLogo from '/discord.png'; // Discord logosunun yolu
import { AiFillInstagram } from 'react-icons/ai';
import { IoMail } from 'react-icons/io5';
import { IoLogoLinkedin } from "react-icons/io";

const Support = () => {
  return (
    <div className="support-container">
      <h1>Support & Feedback</h1>
      <p>Thanks so much for checking out Sufocus!</p>
      <p>
        1. For feedback, suggestions, and theme or feature requests, fill out the
        quick feedback form below.
      </p>
      <p>
        2. For bug reports or help requests, contact us below with issue details,
        system and browser info, and any screenshots, and we'll loop back as
        soon as possible.
      </p>
      <p>3. Enjoying Flocus and got a minute? Leave a quick review to share the love!</p>
      
      <button 
        className="contact-support-button"
        onClick={() => window.location.href = 'mailto:sude__daka@hotmail.com?subject=Support Request&body=Hello, I need help with...'}
      >
        Contact Support
      </button>

      <div className="discord-link">
        <p>Join our Discord community to connect with likeminded productivity lovers!</p>
        <a href="https://discord.com/invite/your-discord-invite" target="_blank" rel="noopener noreferrer">
          <img src={discordLogo} alt="Join our Discord" className="discord-logo" />
        </a>
      </div>

      <div className="version-info">
        <p>v1.0.0</p>
      </div>
      
      <div className="social-media">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="mailto:sude__daka@hotmail.com">
          <IoMail />
        </a>
        <a href="https://www.linkedin.com/in/sudedaka/" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Support;
