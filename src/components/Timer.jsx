import React, { useState } from 'react';
import PomodoroTimer from './Pomodoro-Timer';
import FocusTimer from './Focus-Timer';

const Timer = () => {
  const [pomodoroLength, setPomodoroLength] = useState(25);
  const [shortBreakLength, setShortBreakLength] = useState(5);
  const [longBreakLength, setLongBreakLength] = useState(10);
  const [countdownLength, setCountdownLength] = useState(20);

  return (
    <div className="app">
      <FocusTimer
        pomodoroLength={pomodoroLength}
        setPomodoroLength={setPomodoroLength}
        shortBreakLength={shortBreakLength}
        setShortBreakLength={setShortBreakLength}
        longBreakLength={longBreakLength}
        setLongBreakLength={setLongBreakLength}
        countdownLength={countdownLength}
        setCountdownLength={setCountdownLength}
      />
      <PomodoroTimer
        pomodoroLength={pomodoroLength}
        shortBreakLength={shortBreakLength}
        longBreakLength={longBreakLength}
        countdownLength={countdownLength}
      />
    </div>
  );
};

export default Timer;
