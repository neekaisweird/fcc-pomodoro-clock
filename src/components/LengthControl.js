import React, { useContext } from 'react';
import { PomodoroContext } from '../context/GlobalState';
import styled from 'styled-components';

const Control = styled.div`
  padding: 0.5rem;
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

const LengthControl = ({ type }) => {
  const {
    sessionIncrement,
    sessionDecrement,
    sessionTime,
    breakIncrement,
    breakDecrement,
    breakTime,
    currentTimer,
  } = useContext(PomodoroContext);
  let selected;
  type === 'session'
    ? (selected = {
        time: sessionTime,
        decrement: () => {
          sessionDecrement();
        },
        increment: () => {
          sessionIncrement();
        },
      })
    : (selected = {
        time: breakTime,
        decrement: () => {
          breakDecrement();
        },
        increment: () => {
          breakIncrement();
        },
      });
  return (
    <Control>
      <Label id={`${type}-label`}>
        {type === 'session' ? 'Focus' : 'Break'} Length
      </Label>
      <Button
        id={`${type}-decrement`}
        disabled={currentTimer.running || selected.time === 1}
        onClick={selected.decrement}
      >
        -
      </Button>
      <Length id={`${type}-length`}>{selected.time}</Length>
      <Button
        id={`${type}-increment`}
        disabled={currentTimer.running || selected.time === 60}
        onClick={selected.increment}
      >
        +
      </Button>
    </Control>
  );
};

export default LengthControl;
