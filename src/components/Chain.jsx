import React, { useState } from 'react';
import '../css/chain.css';

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysInMonth = [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

const Chain = () => {
  const [completedDays, setCompletedDays] = useState([]);

  const handleDayClick = (month, day) => {
    const date = `${month}-${day}`;
    if (!completedDays.includes(date)) {
      setCompletedDays([...completedDays, date]);
    } else {
      setCompletedDays(completedDays.filter(d => d !== date));
    }
  };

  const renderDays = () => {
    let days = [];
    for (let month = 0; month < months.length; month++) {
      days.push(
        <div key={`month-${month}`} className="month">
          {months[month]}
        </div>
      );
      days.push(
        <div key={`days-${month}`} className="days">
          {Array.from({ length: daysInMonth[month] }, (_, index) => {
            const dayNumber = index + 1;
            const date = `${month}-${dayNumber}`;
            const isCompleted = completedDays.includes(date);
            return (
              <div
                key={dayNumber}
                className={`day ${isCompleted ? 'completed' : ''}`}
                onClick={() => handleDayClick(month, dayNumber)}
              >
                {isCompleted ? '✗' : dayNumber}
              </div>
            );
          })}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="chain-container">
    <div className="description">
    Set a goal, mark daily progress with crosses on the calendar, and keep the chain unbroken!
    </div>
    {renderDays()}
  </div>
  );
};

export default Chain;
