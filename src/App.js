import React from 'react';
import PomodoroClock from './components/PomodoroClock';
import { PomodoroProvider } from './context/GlobalState';

const App = () => {
  return (
    <PomodoroProvider>
      <PomodoroClock />
    </PomodoroProvider>
  );
};

export default App;
