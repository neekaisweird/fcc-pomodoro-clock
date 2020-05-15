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
    case 'SET_TIMER':
      return {
        ...state,
        currentTimer: { ...state.currentTimer, time: action.time },
      };
    case 'CHANGE_TIMER':
      if (action.kind === 'Session') {
        return {
          ...state,
          currentTimer: {
            type: 'Break',
            time: state.breakTime * 60000,
            running: true,
          },
        };
      } else {
        return {
          ...state,
          currentTimer: {
            type: 'Session',
            time: state.sessionTime * 60000,
            running: true,
          },
        };
      }

    default:
      return state;
  }
};
