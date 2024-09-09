import React, { useState, useEffect } from 'react';
import '../css/track-timer.css'; 
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegStopCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

const TrackTimer = ({ sessionName, time }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Reset timer whenever sessionName or time changes
  useEffect(() => {
    setElapsedTime(0);
    setIsRunning(false); // Stop the timer initially when a new session starts
  }, [sessionName, time]);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setElapsedTime(prev => {
          if (prev < time * 60) {
            return prev + 1;
          }
          clearInterval(timerInterval);
          return prev;
        });
      }, 1000); // Update every second
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval); // Clean up on component unmount
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handlePlay = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleComplete = () => {
    setIsRunning(false);
    setElapsedTime(time * 60); // Set elapsed time to total time
  };

  return (
    <div className="track-timer">
      <div className="track-header">{sessionName || 'Track Timer'}</div>
      <div className="track-timer-display">{formatTime(elapsedTime)}</div>
      <div className="icon-controls">
        <FaRegStopCircle className="icon-control" title="Stop" onClick={handleStop} />
        <FaRegCirclePlay className="icon-control" title="Play" onClick={handlePlay} />
        <FaRegCircleCheck className="icon-control" title="Complete" onClick={handleComplete} />
      </div>
    </div>
  );
};

export default TrackTimer;
