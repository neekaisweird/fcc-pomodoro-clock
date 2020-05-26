import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import styled from 'styled-components';

const Control = styled.div`
  padding: 0.5rem;
  // border: 1px solid #d93a44;
  font-family: 'Fira Code', monospace;
  text-align: center;
`;

const Label = styled.h4`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
`;

const Length = styled.h5`
  display: inline;
  font-size: 2rem;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #f6ede4;
  border: none;
  display: inline;
  font-size: 2rem;
  font-family: inherit;
  padding: 0.5rem 1.5rem;
`;

const Session = () => {
  const {
    sessionIncrement,
    sessionDecrement,
    sessionTime,
    currentTimer,
  } = useContext(PomodoroContext);
  return (
    <Control>
      <Label id="session-label">Focus Length</Label>
      <Button
        id="session-decrement"
        disabled={currentTimer.running || sessionTime === 1}
        onClick={() => sessionDecrement()}
      >
        ↓
      </Button>
      <Length id="session-length">{sessionTime}</Length>
      <Button
        id="session-increment"
        disabled={currentTimer.running || sessionTime === 60}
        onClick={() => sessionIncrement()}
      >
        ↑
      </Button>
    </Control>
  );
};

export default Session;
