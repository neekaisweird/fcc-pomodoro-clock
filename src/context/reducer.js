export default (state, action) => {
  switch (action.type) {
    case 'BREAK_INCREMENT':
      if (state.currentTimer.type === 'Break') {
        return {
          ...state,
          breakTime: state.breakTime + 1,
          currentTimer: {
            ...state.currentTimer,
            time: (state.breakTime + 1) * 60000,
          },
        };
      }
      return {
        ...state,
        breakTime: state.breakTime + 1,
      };
    case 'BREAK_DECREMENT':
      if (state.currentTimer.type === 'Break') {
        return {
          ...state,
          breakTime: state.breakTime - 1,
          currentTimer: {
            ...state.currentTimer,
            time: (state.breakTime - 1) * 60000,
          },
        };
      }
      return {
        ...state,
        breakTime: state.breakTime - 1,
      };
    case 'SESSION_INCREMENT':
      if (state.currentTimer.type === 'Session') {
        return {
          ...state,
          sessionTime: state.sessionTime + 1,
          currentTimer: {
            ...state.currentTimer,
            time: (state.sessionTime + 1) * 60000,
          },
        };
      }
      return {
        ...state,
        sessionTime: state.sessionTime + 1,
      };
    case 'SESSION_DECREMENT':
      if (state.currentTimer.type === 'Session') {
        return {
          ...state,
          sessionTime: state.sessionTime - 1,
          currentTimer: {
            ...state.currentTimer,
            time: (state.sessionTime - 1) * 60000,
          },
        };
      }
      return {
        ...state,
        sessionTime: state.sessionTime - 1,
      };
    case 'RESET':
      return {
        ...state,
        breakTime: 5,
        sessionTime: 25,
        currentTimer: {
          type: 'Session',
          time: 1500000,
          running: false,
        },
      };
    case 'START':
      return {
        ...state,
        currentTimer: { ...state.currentTimer, running: true },
      };
    case 'STOP':
      return {
        ...state,
        currentTimer: { ...state.currentTimer, running: false },
      };
    default:
      return state;
  }
};
