import React, { useState, useRef } from 'react';
import '../css/sounds.css';
import { FaCloudRain, FaWind } from 'react-icons/fa';
import { FaFire } from "react-icons/fa6";
import { MdForest } from "react-icons/md";
import { GiFlute } from "react-icons/gi";
import { FaBellSlash } from "react-icons/fa";

const Sounds = () => {
  const [volume, setVolume] = useState(1);
  const [currentSound, setCurrentSound] = useState(null);
  const audioRef = useRef(new Audio());

  const ambientSoundList = [
    { id: 1, name: 'None', Icon: FaBellSlash, src: '', color: 'white' },
    { id: 2, name: 'Forest', Icon: MdForest, src: '/sounds/forest.mp3', color: 'green' },
    { id: 3, name: 'Rain', Icon: FaCloudRain, src: '/sounds/rain.mp3', color: '#00BFFF' },
    { id: 4, name: 'Wind', Icon: FaWind, src: '/sounds/wind.mp3', color: '#87CEEB' },
    { id: 5, name: 'Fire', Icon: FaFire, src: '/sounds/fire.mp3', color: 'red' },
  ];

  const etherealSoundList = [
    { id: 6, name: 'Chinese Flute', Icon: GiFlute, src: '/sounds/chineseflute.mp3', color: 'white' },
    { id: 7, name: 'Dramatic Flute', Icon: GiFlute, src: '/sounds/dramaticflute.mp3', color: 'white' },
    { id: 8, name: 'Traditional Flute', Icon: GiFlute, src: '/sounds/traditionalflute.mp3', color: 'white' },
  ];

  const handlePlaySound = (sound) => {
    if (sound && sound.src) {
      audioRef.current.src = sound.src;
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  };

  const handleStopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleSoundSelection = (sound) => {
    setCurrentSound(sound);
    if (sound.src) {
      handlePlaySound(sound);
    } else {
      handleStopSound();
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = e.target.value;
    }
  };

  return (
    <div className="sounds-container">
      <h1 className="sounds-title">Ambient Sounds</h1>
      <div className="controls">
        <div className="volume-control">
          <label htmlFor="volume" className="form-label h4 mb-2">Volume</label>
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            disabled={!currentSound || !currentSound.src}
          />
        </div>
      </div>
      <div className="sound-options">
        {ambientSoundList.map((sound) => (
          <label key={sound.id} className="form-check-label">
            <input
              type="radio"
              name="ambient-sound"
              value={sound.src}
              checked={currentSound && currentSound.src === sound.src}
              onChange={() => handleSoundSelection(sound)}
              className="form-check-input"
            />
            {sound.name} <sound.Icon className="sound-icon" style={{ color: sound.color }} />
          </label>
        ))}
      </div>

      <h1 className="sounds-title">Ethereal Sounds</h1>
      <div className="sound-options">
        {etherealSoundList.map((sound) => (
          <label key={sound.id} className="form-check-label">
            <input
              type="radio"
              name="ethereal-sound"
              value={sound.src}
              checked={currentSound && currentSound.src === sound.src}
              onChange={() => handleSoundSelection(sound)}
              className="form-check-input"
            />
            {sound.name} <sound.Icon className="sound-icon" style={{ color: sound.color }} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sounds;
