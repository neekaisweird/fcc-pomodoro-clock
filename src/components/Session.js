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
      <h4 id="session-label">Session Length</h4>
      <button
        id="session-decrement"
        disabled={currentTimer.running || sessionTime === 1}
        onClick={() => sessionDecrement()}
      >
        ↓
      </button>
      <h5 id="session-length">{sessionTime}</h5>
      <button
        id="session-increment"
        disabled={currentTimer.running || sessionTime === 60}
        onClick={() => sessionIncrement()}
      >
        ↑
      </button>
    </div>
  );
};

export default Session;
