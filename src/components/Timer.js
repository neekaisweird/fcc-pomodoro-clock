import React, { useContext, useEffect } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import useInterval from '../useInterval';

// will receive currentTimer from context to display Timer

const convertTime = (milliseconds) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};

const Timer = () => {
  const { currentTimer, setTimer, changeTimer } = useContext(PomodoroContext);
  useInterval(
    () => {
      setTimer(currentTimer.time - 1000);
    },
    currentTimer.running && currentTimer.time !== 0 ? 1000 : null
  );
  useEffect(() => {
    if (currentTimer.time === 0) {
      changeTimer(currentTimer.type);
    }
  });

  return <h1>{convertTime(currentTimer.time)}</h1>;
};

export default Timer;
