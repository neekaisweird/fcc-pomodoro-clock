import React, { useRef, useContext, useEffect } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import styled from 'styled-components';

const radius = 200;
const stroke = 8;
const circumference = (radius - stroke * 2) * 2 * Math.PI;

const Border = styled.circle`
  stroke-width: ${stroke};
  stroke: #c0121d;
  fill: #d93a44;
  r: calc(${radius} - ${stroke} * 2);
  cx: ${radius};
  cy: ${radius};
  stroke-dasharray: ${circumference} ${circumference};
  stroke-dashoffset: ${circumference};
  transition: stroke-dashoffset 500ms;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Circle = () => {
  const { currentTimer, breakTime, sessionTime } = useContext(PomodoroContext);
  const progressCircle = useRef();

  useEffect(() => {
    let totalTime;
    currentTimer.type === 'Session'
      ? (totalTime = sessionTime * 60000)
      : (totalTime = breakTime * 60000);

    const amount = currentTimer.time / totalTime;
    let offset = circumference - amount * circumference;
    requestAnimationFrame(() => {
      progressCircle.current.style.strokeDashoffset = offset;
    });
  }, [currentTimer.time, currentTimer.type, sessionTime, breakTime]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: radius * 2,
        width: radius * 2,
        backgroundColor: 'transparent',
        gridColumn: 1,
        gridRow: 1,
        zIndex: -1,
      }}
    >
      <Border ref={progressCircle} />
    </svg>
  );
};

export default Circle;
