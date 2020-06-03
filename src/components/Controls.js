import React from 'react';
import LengthControl from './LengthControl';
import StartStop from './StartStop';
import Reset from './Reset';
import styled from 'styled-components';

const ControlsWrapper = styled.div`
  padding: 3rem;
  height: 300px;
`;

const Controls = () => {
  return (
    <ControlsWrapper>
      <LengthControl type="session" />
      <LengthControl type="break" />
      <StartStop />
      <Reset />
    </ControlsWrapper>
  );
};

export default Controls;
