import React from 'react';
import '../css/information.css';

function Information() {
  return (
<div className="information-content">
  <h1>Online Pomodoro Timer</h1>
  <p>TomatoTimers is a customizable and easy to use looping pomodoro timer to boost your efficiency.</p>
  <h3>About Pomodoro Technique</h3>
  <p>
    Pomodoro™ Technique is a time management method developed by Francesco Cirillo in the late 1980s. This technique uses a timer to break down work into a set of intervals separated by breaks. Pomodoro technique increases productivity by taking short scheduled breaks regularly.
  </p>
  <h3>How to use Pomodoro/ Tomato timers</h3>
  <p>1. Decide task to be done and set timers to 25 minutes for one "Pomodoro"</p>
  <p>2. Work on task until timer is complete</p>
  <p>3. After timer completion, put a checkmark on to-do list</p>
  <p>4. Take a 5-minute short break</p>
  <p>5. After four "Pomodoro" take a long break</p>
  <p>6. Repeat to step 1</p>
  <p>USE THE LOOP BUTTON TO DO STEP 1 UNTIL STEP 5 IN A ROW</p>
  <p>
    Pomodoro™ and Pomodoro Technique® are registered trademarks of Francesco Cirillo. This web app is not affiliated with Francesco Cirillo.
  </p>
</div>

  )
}

export default Information;