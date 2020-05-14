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
      Break
      <button
        disabled={currentTimer.running || breakTime === 1}
        onClick={() => breakDecrement()}
      >
        ↓
      </button>
      {breakTime}
      <button
        disabled={currentTimer.running || breakTime === 60}
        onClick={() => breakIncrement()}
      >
        ↑
      </button>
    </div>
  );
};

export default Break;
