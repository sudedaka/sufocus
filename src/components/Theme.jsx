import React from 'react';
import '../css/theme.css'; 

const Theme = ({ onBackgroundChange }) => {
  const backgrounds = [
    { url: '/backgrounds/background1.jpg', name: 'Cozy Bedroom' },
    { url: '/backgrounds/background2.jpg', name: 'Cozy Sunset' },
    { url: '/backgrounds/background3.jpg', name: 'Sakura Bedroom' },
    { url: '/backgrounds/background4.jpg', name: 'Anime Store' },
    { url: '/backgrounds/background5.jpg', name: 'Lush Street' },
    { url: '/backgrounds/background6.jpg', name: 'Lofi Street' },
    { url: '/backgrounds/background7.jpg', name: 'Spring Time' },
    { url: '/backgrounds/background8.jpg', name: 'Samurai Journey' },
    { url: '/backgrounds/background9.png', name: 'Lofi Street' },
    { url: '/backgrounds/background10.png', name: 'Spring Valley' },
    { url: '/backgrounds/background11.png', name: 'Dreamy Horizon' },
    { url: '/backgrounds/background12.png', name: 'Orange Gradient' },
    { url: '/backgrounds/background13.png', name: 'Butterfly Glow' },
    { url: '/backgrounds/background14.png', name: 'Motivational Meadow' },
    { url: '/backgrounds/background15.png', name: 'Zen Reflection' },
    { url: '/backgrounds/background16.png', name: 'Retro Chill' },
  ];

  return (
    <div className="theme-container">
      <h2 style={{color: "white", paddingLeft: "10px"}}>Lofi Backgrounds</h2>
      <div className="background-options">
        {backgrounds.slice(0, 8).map((bg, index) => (
          <div key={index} className="background-item">
            <button 
              className="background-option" 
              onClick={() => onBackgroundChange(bg.url)}
              style={{ backgroundImage: `url(${bg.url})` }}
            >
            </button>
            <h3 className="background-name">{bg.name}</h3>
          </div>
        ))}
      
        <h2 style={{color: "white", paddingLeft: "10px", width: "100%"}}>Cozy Illustration</h2>
        
        {backgrounds.slice(8).map((bg, index) => (
          <div key={index} className="background-item">
            <button 
              className="background-option" 
              onClick={() => onBackgroundChange(bg.url)}
              style={{ backgroundImage: `url(${bg.url})` }}
            >
            </button>
            <h3 className="background-name">{bg.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
