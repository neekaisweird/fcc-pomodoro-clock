import React, { useContext, useEffect, useRef } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import useInterval from '../hooks/useInterval';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  font-family: 'Fira Code', monospace;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  grid-column: 1;
  grid-row: 1;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const TimerLeft = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  margin: 1rem 0;
`;

const TimerLabel = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
`;

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
    },
    currentTimer.running && currentTimer.time !== -1000 ? 1000 : null
  );
  useEffect(() => {
    if (currentTimer.time === 0) playBeep();
    if (currentTimer.time === 1000)
      setTimeout(() => {
        changeTimer(currentTimer.type);
      }, 1000);

    if (!currentTimer.running) {
      beep.current.pause();
      beep.current.currentTime = 0;
    }
  });

  return (
    <>
      <TimerWrapper>
        <TimerLeft id="time-left">{convertTime(currentTimer.time)}</TimerLeft>
        <TimerLabel id="timer-label">
          {currentTimer.type === 'Session' ? 'Focus Time' : 'Break Time'}
        </TimerLabel>
      </TimerWrapper>
      <audio
        id="beep"
        ref={beep}
        src="https://sampleswap.org/samples-ghost/DRUM%20LOOPS%20and%20BREAKS/121%20to%20130%20bpm/331[kb]125_lo-squeaky-beep.aif.mp3"
      />
    </>
  );
};

export default Timer;
