import React from 'react';
import Session from './Session';
import Break from './Break';
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
      <Session />
      <Break />
      <StartStop />
      <Reset />
    </ControlsWrapper>
  );
};

export default Controls;
