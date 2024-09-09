import React, { useState } from 'react';
import '../css/track.css';

const Track = ({ setSessionName, setTime }) => {
  const [time, setLocalTime] = useState(30);
  const [sessionName, setSessionNameLocal] = useState('');

  const increaseTime = () => {
    setLocalTime(prevTime => prevTime + 5);
  };

  const decreaseTime = () => {
    setLocalTime(prevTime => Math.max(prevTime - 5, 0));
  };

  const handleSessionNameChange = (event) => {
    setSessionNameLocal(event.target.value);
  };

  const handleStart = () => {
    setSessionName(sessionName); // Pass sessionName to parent
    setTime(time); // Pass time to parent
  };

  return (
    <div className="track-page">
      <div className="track-container">
        <div className="track-input-group">
          <h4>Session Name</h4>
          <input 
            className="track-input" 
            type="text" 
            placeholder="Enter session name" 
            value={sessionName}
            onChange={handleSessionNameChange}
          />
        </div>
        <div className="track-input-group">
          <h4>Estimated Time (mins)</h4>
          <div className="time-container">
            <button className="time-button" onClick={decreaseTime}>-</button>
            <span className="time-display">{time}</span>
            <button className="time-button" onClick={increaseTime}>+</button>
          </div>
        </div>
        <button className="start-now-button" onClick={handleStart}>Start Now</button>
      </div>
    </div>
  );
};

export default Track;
