import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`;

const StartStop = () => {
  const { currentTimer, start, stop } = useContext(PomodoroContext);
  return (
    <>
      {currentTimer.running ? (
        <Button id="start_stop" onClick={() => stop()}>
          Pause
        </Button>
      ) : (
        <Button id="start_stop" onClick={() => start()}>
          Start
        </Button>
      )}
    </>
  );
};

export default StartStop;
