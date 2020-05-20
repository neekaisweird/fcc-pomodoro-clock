import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';

// will receive breakTime from context to display breakTime
// will receive breakIncrement and breakDecremenet for buttons

const Break = () => {
  const {
    breakIncrement,
    breakDecrement,
    breakTime,
    currentTimer,
  } = useContext(PomodoroContext);
  return (
    <div>
      <h4 id="break-label">Break Length</h4>
      <button
        id="break-decrement"
        disabled={currentTimer.running || breakTime === 1}
        onClick={() => breakDecrement()}
      >
        ↓
      </button>
      <h5 id="break-length">{breakTime}</h5>
      <button
        id="break-increment"
        disabled={currentTimer.running || breakTime === 60}
        onClick={() => breakIncrement()}
      >
        ↑
      </button>
    </div>
  );
};

export default Break;
