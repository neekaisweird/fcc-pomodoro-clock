import React from 'react';
import LengthControl from './LengthControl';
import StartStop from './StartStop';
import Reset from './Reset';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
  padding: 2rem;
  width: 300px;
  height: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  height: 59px;
`;

const Controls = () => {
  return (
    <ControlsWrapper>
      <LengthControl type="session" />
      <LengthControl type="break" />
      <Flex>
        <StartStop />
        <Reset />
      </Flex>
    </ControlsWrapper>
  );
};

export default Controls;
