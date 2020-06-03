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
  &:hover {
    // color: white;
  }
`;

const Reset = () => {
  const { reset } = useContext(PomodoroContext);
  return (
    <Button
      id="reset"
      onClick={() => {
        reset();
      }}
    >
      Reset
    </Button>
  );
};

export default Reset;
