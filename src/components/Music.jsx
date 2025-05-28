import React from 'react';
import { FaRegSmile } from "react-icons/fa";

const Music = ({ playlistUrl }) => {
  return (
    <div className="music-container">
        <h2 className="music-title">Select song for your mood <FaRegSmile style={{color:"white"}}/>  </h2>
      <div className="music-widget">
 <iframe
  src={playlistUrl}
  width="100%"
  height="80"
  style={{
    border: "none",
    display: "block", // önemli
    margin: "0",
    padding: "0"
  }}
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  title="Spotify Playlist"
/>


    </div>
    </div>  
  
  );
};

export default Music;
