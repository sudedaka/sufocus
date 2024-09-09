// src/App.jsx

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { BsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import Header from './components/Header';
import Greetings from './components/Greetings';
import NameDisplay from './components/NameDisplay';
import TrackTimer from './components/Track-Timer';
import PomodoroTimer from './components/Pomodoro-Timer';
import Music from './components/Music';
import Streak from './components/Streak'; // Streak bileşenini import edin

const App = () => {
  const [background, setBackground] = useState('/backgrounds/background.png');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [isNameDisplayOpen, setIsNameDisplayOpen] = useState(false);
  const [isTrackVisible, setIsTrackVisible] = useState(false);
  const [isPomodoroVisible, setIsPomodoroVisible] = useState(true);
  const [sessionName, setSessionName] = useState('');
  const [time, setTime] = useState(30);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNameChange = (name) => {
    setCurrentName(name);
    setIsNameDisplayOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleBackgroundChange = (url) => {
    setBackground(url);
  };

  const openNameDisplay = () => {
    setIsNameDisplayOpen(true);
  };

  const handleStart = (name, time) => {
    setSessionName(name);
    setTime(time);
    setIsTrackVisible(true);
    setIsPomodoroVisible(false);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      {isPomodoroVisible && !isTrackVisible && <PomodoroTimer />}
      {isTrackVisible && <TrackTimer sessionName={sessionName} time={time} />}
      <Greetings name={currentName} onIconClick={openNameDisplay} />
      <Navbar 
        isOpen={isNavbarOpen} 
        onClose={() => setIsNavbarOpen(false)} 
        onBackgroundChange={handleBackgroundChange}
        setCurrentQuote={setCurrentQuote}
        setCurrentName={setCurrentName}
        setSessionName={(name) => handleStart(name, time)} 
        setTime={setTime} 
      />
      <div className="button-container">
        <div className="tooltip">
          <button className="streak-btn">
            <Streak />
          </button>
          <span className="tooltip-text">Nice! You're on a 1 day streak.</span>
        </div>
        <button className="settings-btn" onClick={toggleNavbar}>
          <MdOutlineSettingsSuggest color="black" size={50} />
        </button>
        <button className="fullscreen-btn" onClick={toggleFullscreen}>
          {isFullscreen ? <BsFullscreenExit size={50} /> : <BsFullscreen size={50} />}
        </button>
      </div>
      <div className="quote-display-bottom-left">{currentQuote}</div>   
      
      {isNameDisplayOpen && (
        <>
          <div className="overlay" onClick={() => setIsNameDisplayOpen(false)}></div>
          <NameDisplay setCurrentName={handleNameChange} />
        </>
      )}
      <div className='music-content'>
        <Music playlistUrl="https://open.spotify.com/embed/playlist/5J7JJzMwXPceoQUpE1vb32" />
      </div>
    </div>
  );
};

export default App;
