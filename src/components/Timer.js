import React, { useContext, useEffect, useRef } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import useInterval from '../hooks/useInterval';

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
  const beep = useRef();
  const playBeep = () => {
    if (beep.current !== null) {
      beep.current.currentTime = 0;
      beep.current.play();
    }
  };
  useInterval(
    () => {
      setTimer(currentTimer.time - 1000);
      console.log(convertTime(currentTimer.time - 1000));
    },
    currentTimer.running && currentTimer.time !== -1000 ? 1000 : null
  );
  useEffect(() => {
    if (currentTimer.time === 0) playBeep();
    if (currentTimer.time === -1000) changeTimer(currentTimer.type);
  });

  return (
    <div>
      <h2 id="timer-label">{currentTimer.type}</h2>
      <h1 id="time-left">{convertTime(currentTimer.time)}</h1>
      <audio
        id="beep"
        ref={beep}
        src="https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/121%20to%20130%20bpm/331[kb]125_lo-squeaky-beep.aif.mp3"
        // src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Weird%20and%20Interesting%20Hits/66[kb]three-beep-stereo.aif.mp3"
      />
    </div>
  );
};

export default Timer;
