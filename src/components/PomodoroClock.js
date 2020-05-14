import React from 'react';
import Timer from './Timer';
import Controls from './Controls';

const PomodoroClock = () => {
  return (
    <div>
      Pomodoro Clock
      <Timer />
      <Controls />
    </div>
  );
};

export default PomodoroClock;
