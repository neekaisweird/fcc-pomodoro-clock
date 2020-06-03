import React from 'react';
import Timer from './Timer';
import Controls from './Controls';
import Circle from './Circle';
import styled from 'styled-components';

const Clock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PomodoroClock = () => {
  return (
    <Clock>
      <div style={{ display: 'grid' }}>
        <Timer />
        <Circle />
      </div>

      <Controls />
    </Clock>
  );
};

export default PomodoroClock;
