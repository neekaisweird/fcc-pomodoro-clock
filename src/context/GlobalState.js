import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  breakTime: 5,
  sessionTime: 25,
  currentTimer: {
    type: 'Session',
    time: 1500000,
    running: false,
  },
};

export const PomodoroContext = createContext(initialState);

export const PomodoroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const breakIncrement = () => {
    dispatch({
      type: 'BREAK_INCREMENT',
    });
  };
  const breakDecrement = () => {
    dispatch({
      type: 'BREAK_DECREMENT',
    });
  };
  const sessionIncrement = () => {
    dispatch({
      type: 'SESSION_INCREMENT',
    });
  };
  const sessionDecrement = () => {
    dispatch({
      type: 'SESSION_DECREMENT',
    });
  };
  const start = () => {
    dispatch({
      type: 'START',
    });
  };
  const stop = () => {
    dispatch({
      type: 'STOP',
    });
  };
  const reset = () => {
    dispatch({
      type: 'RESET',
    });
  };
  const setTimer = (time) => {
    dispatch({
      type: 'SET_TIMER',
      time,
    });
  };
  const changeTimer = (kind) => {
    dispatch({
      type: 'CHANGE_TIMER',
      kind,
    });
  };
  return (
    <PomodoroContext.Provider
      value={{
        breakTime: state.breakTime,
        sessionTime: state.sessionTime,
        currentTimer: state.currentTimer,
        breakIncrement,
        breakDecrement,
        sessionIncrement,
        sessionDecrement,
        reset,
        start,
        stop,
        setTimer,
        changeTimer,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
