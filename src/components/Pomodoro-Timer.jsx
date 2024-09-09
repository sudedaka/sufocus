import React, { useState, useEffect } from 'react';
import '../css/pomodoro-timer.css';
import { MdOutlineEdit } from 'react-icons/md'; // Import the pen icon
import FocusName from './FocusName'; // Import FocusName component

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // Initial time set to 25 minutes (in seconds)
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('Focus');
  const [focusText, setFocusText] = useState('What do you want to focus on?'); // Default text
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isRunning && time !== 25 * 60) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(mode === 'Focus' ? 25 * 60 : mode === 'Short Break' ? 5 * 60 : 15 * 60); // Adjust based on mode
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTime(newMode === 'Focus' ? 25 * 60 : newMode === 'Short Break' ? 5 * 60 : 15 * 60);
    if (isRunning) {
      handleStop(); // Stop timer when mode changes
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveFocusText = (newFocusText) => {
    setFocusText(newFocusText);
    handleCloseModal();
  };

  return (
    <div className="pomodoro-timer">
      <div className="focus-label" onClick={handleOpenModal}>
        <span>{focusText}</span>
        <MdOutlineEdit className="edit-icon" />
      </div>
      <div className="timer-modes">
        <button
          className={`timer-mode-button ${mode === 'Focus' ? 'active' : ''}`}
          onClick={() => handleModeChange('Focus')}
        >
          Focus
        </button>
        <button
          className={`timer-mode-button ${mode === 'Short Break' ? 'active' : ''}`}
          onClick={() => handleModeChange('Short Break')}
        >
          Short Break
        </button>
        <button
          className={`timer-mode-button ${mode === 'Long Break' ? 'active' : ''}`}
          onClick={() => handleModeChange('Long Break')}
        >
          Long Break
        </button>
      </div>
      <div className="timer-display">
        {formatTime(time)}
      </div>
      <div className="timer-controls">
        <button className="timer-button" onClick={handleStart}>Start</button>
        <button className="timer-button" onClick={handleStop}>Stop</button>
        <button className="timer-button" onClick={handleReset}>Reset</button>
      </div>
      {isModalOpen && <FocusName onClose={handleCloseModal} onSave={handleSaveFocusText} />}
    </div>
  );
};

export default PomodoroTimer;
