import React from 'react';
import '../css/greeting.css';
import { TbHandClick } from "react-icons/tb";

const Greetings = ({ name, onIconClick }) => {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good morning';
    if (hours < 18) return 'Good afternoon';
    return 'Good evening! Let\'s crush it!  ';
  };

  return (
    <div className="greetings-display">
      {getGreeting()}{name ? `, ${name}` : ''}
      <TbHandClick 
        style={{ marginLeft: '10px', cursor: 'pointer' }} 
        size={30} 
        onClick={onIconClick}
      />
    </div>
  );
};

export default Greetings;
