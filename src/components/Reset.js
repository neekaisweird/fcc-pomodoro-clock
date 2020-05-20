import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';

// will receive reset from context to reset state

const Reset = () => {
  const { reset } = useContext(PomodoroContext);
  return (
    <button
      id="reset"
      onClick={() => {
        reset();
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
