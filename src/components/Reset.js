import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';

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
