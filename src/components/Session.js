import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';

// will receive sessionTime from context to display sessionTime
// will receive sessionIncrement and sessionDecremenet for buttons

const Session = () => {
  const {
    sessionIncrement,
    sessionDecrement,
    sessionTime,
    currentTimer,
  } = useContext(PomodoroContext);
  return (
    <div>
      Session
      <button
        disabled={currentTimer.running || sessionTime === 1}
        onClick={() => sessionDecrement()}
      >
        ↓
      </button>
      {sessionTime}
      <button
        disabled={currentTimer.running || sessionTime === 60}
        onClick={() => sessionIncrement()}
      >
        ↑
      </button>
    </div>
  );
};

export default Session;
