import React, { useState } from 'react';
import '../css/quotes.css';

const Quotes = ({ setCurrentQuote }) => {
  const [mode, setMode] = useState('Motivation');
  const [customQuote, setCustomQuote] = useState('');

  const quoteList = {
    'Motivation': [
      '"The only way to do great work is to love what you do."',
      '"Don\'t stress. Do your best. Forget the rest."',
      '"It is all a part of the process."',
      '"Remember why you started"',
    ],
    'Inspirational': [
      '"In the end, we only regret the chances we didn\'t take"',
      '"You already have what it takes"',
      '"Risking is better than regretting"',
    ],
    'Gratitude': [
      '"Make each given day a gift"',
      '"A grateful heart is a magnet for miracles"',
      '"The more grateful I am, the more beauty I see"',
      '"Gratitude turns what we have into enough"',
    ],
    'Selfcare': [
      '"Only compare yourself to your previous self"',
      '"Do it for you, not them"',
      '"Self care is not a luxury. It\'s a necessity"',
    ],
    'Productivity': [
      '"Small steps every day"',
      '"Focus on progress, not perfection"',
      '"It all depends on you"',
      '"Focus on being productive instead of busy"',
      '"The future depends on what you do today"',
    ],
    'Wellness': [
      '"Happy mind, happy life"',
      '"Thoughts are not facts"',
      '"Life is beautiful and I have time"',
    ],
  };


  const getRandomQuote = (mode) => {
    const quotes = quoteList[mode];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleModeChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
    setCurrentQuote(getRandomQuote(selectedMode));
  };

  const handleCustomQuoteChange = (event) => {
    const newCustomQuote = event.target.value;
    setCustomQuote(newCustomQuote);
    setCurrentQuote(newCustomQuote);
  };

  return (
    <div className="quotes-content">
      <h1>Select Quote Mode</h1>
      <select value={mode} onChange={handleModeChange}>
        <option value="Motivation">Motivation</option>
        <option value="Inspirational">Inspirational</option>
        <option value="Gratitude">Gratitude</option>
        <option value="Selfcare">Self Care</option>
        <option value="Productivity">Productivity</option>
        <option value="Wellness">Wellness</option>
      </select>

      <div className="quote-input">
        <input 
          type="text" 
          value={customQuote} 
          onChange={handleCustomQuoteChange} 
          placeholder="Enter your quote" 
        />
        <button onClick={() => setCurrentQuote(customQuote)}>OK</button>
      </div>
    </div>
  );
};

export default Quotes;
