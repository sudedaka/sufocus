import React from 'react';
import '../css/namedisplay.css';

const NameDisplay = ({ setCurrentName }) => {
  const [name, setName] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    setCurrentName(name);
  };

  return (
    <div className="name-display">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NameDisplay;
