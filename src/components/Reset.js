import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';

// will receive reset from context to reset state

const Reset = () => {
  const { reset } = useContext(PomodoroContext);
  return (
    <div>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
