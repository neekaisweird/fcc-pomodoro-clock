import React from 'react';
import Session from './Session';
import Break from './Break';
import StartStop from './StartStop';
import Reset from './Reset';

const Controls = () => {
  return (
    <div>
      <Session />
      <Break />
      <StartStop />
      <Reset />
    </div>
  );
};

export default Controls;
