import React, { useState } from 'react';
import '../css/focusname.css';

const FocusName = ({ onClose, onSave }) => {
  const [focusName, setFocusName] = useState('');

  const handleChange = (e) => {
    setFocusName(e.target.value);
  };

  const handleSave = () => {
    if (focusName.trim()) {
      onSave(focusName);
      onClose();
    }
  };

  const handleClear = () => {
    onSave('What do you want to focus on?'); // Reset to default text
    onClose();
  };

  return (
    <div className="focus-overlay">
      <div className="focus-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <button className="clear-button" onClick={handleClear}>Clear</button>
        <h2>Focus Priorities</h2>
        <h4>Set your priorities for the day</h4>
        <input
          type="text"
          value={focusName}
          onChange={handleChange}
          placeholder="Type your priority here"
        />
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default FocusName;
