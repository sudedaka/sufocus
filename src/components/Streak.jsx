// src/components/Streak.jsx

import React, { useEffect, useState } from 'react';

const Streak = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const updateStreak = () => {
      const lastVisit = localStorage.getItem('lastVisit');
      const today = new Date().toDateString();
      let newStreak = parseInt(localStorage.getItem('streak') || '0', 10);

      console.log('Last Visit:', lastVisit);
      console.log('Today:', today);
      console.log('Current Streak:', newStreak);

      if (lastVisit) {
        const lastDate = new Date(lastVisit).toDateString();

        console.log('Last Date:', lastDate);

        if (today === lastDate) {
          console.log('Already visited today');
          return;
        } else if (new Date(lastDate).getDate() === new Date(today).getDate() - 1) {
          newStreak += 1;
          console.log('Streak increased');
        } else {
          newStreak = 1;
          console.log('New streak started');
        }
      } else {
        newStreak = 1;
        console.log('First visit');
      }

      localStorage.setItem('streak', newStreak);
      localStorage.setItem('lastVisit', new Date().toISOString());
      setStreak(newStreak);
    };

    updateStreak();
  }, []);

  return (
    <div className="streak-container">
      {streak} {/* Sadece günlük artan rakamı gösterir */}
    </div>
  );
};

export default Streak;
