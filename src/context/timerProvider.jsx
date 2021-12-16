import React, { useState } from 'react';
import TimerContext from './timerContext';

function TimerProvider({ children }) {
  const [choosenGender, setChoosenGender] = useState(undefined);
  const [timeHasCome, setTimeHasCome] = useState(false);
  const [timerIsRunning, setRunning] = useState(false);
  const INITIAL_VALUE = {
    choosenGender,
    setChoosenGender,
    timeHasCome,
    setTimeHasCome,
    timerIsRunning,
    setRunning,
  };
  return (
    <TimerContext.Provider value={ INITIAL_VALUE}>
      { children }
    </TimerContext.Provider>
  );
}

export default TimerProvider;