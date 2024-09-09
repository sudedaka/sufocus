import React, { useState } from 'react';
import '../css/navbar.css';
import Theme from './Theme';
import Information from './Information';
import Todo from './Todo';
import Sounds from './Sounds';
import Quotes from './Quotes';
import Track from './Track';
import Chain from './Chain';
import SupportFeedBack from './Support-Feedback';
import { FaPalette, FaVolumeUp, FaQuoteLeft, FaPencilAlt } from 'react-icons/fa';
import { MdPhotoAlbum } from "react-icons/md";
import { HiInformationCircle } from 'react-icons/hi2';
import { MdFeedback } from 'react-icons/md';
import { GiCrossedChains } from "react-icons/gi";


const Navbar = ({ isOpen, onClose, onBackgroundChange, setCurrentQuote, setSessionName, setTime, setCompletedSession }) => {
  const [activeContent, setActiveContent] = useState('');

  const handleLinkClick = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <div className={`off-canvas ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <div className="off-canvas-header">
        <button onClick={onClose} className="close-btn" aria-label="Close Sidebar">✕</button>
      </div>
      <div className="off-canvas-body">
        <div className="sidebar">
          <a href="#theme" onClick={() => handleLinkClick('theme')} className={activeContent === 'theme' ? 'active' : ''}>
            <FaPalette /> Theme
          </a>
          <a href="#sounds" onClick={() => handleLinkClick('sounds')} className={activeContent === 'sounds' ? 'active' : ''}>
            <FaVolumeUp /> Sounds
          </a>
          <a href="#chain" onClick={() => handleLinkClick('chain')} className={activeContent === 'chain' ? 'active' : ''}>
            <GiCrossedChains/> Chain
          </a>
          <a href="#todo" onClick={() => handleLinkClick('todo')} className={activeContent === 'todo' ? 'active' : ''}>
            <FaPencilAlt /> Todo
          </a>
          <a href="#track" onClick={() => handleLinkClick('track')} className={activeContent === 'track' ? 'active' : ''}>
            <MdPhotoAlbum /> Track
          </a>
          <a href="#quotes" onClick={() => handleLinkClick('quotes')} className={activeContent === 'quotes' ? 'active' : ''}>
            <FaQuoteLeft /> Quotes
          </a>
         
          <a href="#information" onClick={() => handleLinkClick('information')} className={activeContent === 'information' ? 'active' : ''}>
            <HiInformationCircle /> Information
          </a>
          <a href="#support-feedback" onClick={() => handleLinkClick('support-feedback')} className={activeContent === 'support-feedback' ? 'active' : ''}>
            <MdFeedback /> Support & Feedback
          </a>
        </div>
        <div className="content">
          {activeContent === 'theme' && <Theme onBackgroundChange={onBackgroundChange} />}
          {activeContent === 'sounds' && <Sounds />}
          {activeContent === 'chain' && <Chain totalDays={30} />} 
          {activeContent === 'todo' && <Todo />}
          {activeContent === 'track' && <Track setSessionName={setSessionName} setTime={setTime} completedSession={setCompletedSession} />}
          {activeContent === 'quotes' && <Quotes setCurrentQuote={setCurrentQuote} />}
          {activeContent === 'information' && <Information />}
          {activeContent === 'support-feedback' && <SupportFeedBack />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
