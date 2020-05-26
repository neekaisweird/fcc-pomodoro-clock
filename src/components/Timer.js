import React, { useContext, useEffect, useRef } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import useInterval from '../hooks/useInterval';
import styled from 'styled-components';

const Circle = styled.div`
  border: 10px solid #c0121d;
  border-radius: 50%;
  height: 400px;
  width: 400px;
  background-color: #d93a44;
  color: #fff;
`;

const TimerWrapper = styled.div`
  font-family: 'Fira Code', monospace;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
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
      console.log(convertTime(currentTimer.time - 1000));
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
    <Circle>
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
        // src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Weird%20and%20Interesting%20Hits/66[kb]three-beep-stereo.aif.mp3"
      />
    </Circle>
  );
};

export default Timer;
