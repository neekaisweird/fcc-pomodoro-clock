import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';

// needs refactoring

const StartStop = () => {
  const { currentTimer, start, stop } = useContext(PomodoroContext);
  return (
    <div>
      {currentTimer.running ? (
        <button onClick={() => stop()}>Stop</button>
      ) : (
        <button onClick={() => start()}>Start</button>
      )}
    </div>
  );
};

export default StartStop;
