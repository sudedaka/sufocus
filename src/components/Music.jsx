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
        height="100%"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
    </div>
    </div>  
  
  );
};

export default Music;
