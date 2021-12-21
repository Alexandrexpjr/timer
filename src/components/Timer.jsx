import React, { useContext, useState } from 'react';
import timerContext from '../context/timerContext';
import Audio from './Audio';
import TimerButton from './Button';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutesReceived, setMinutesReceived] = useState(0);
  const { timeHasCome, setTimeHasCome, setRunning, presetTimers, setPresetTimers } = useContext(timerContext);
  const [intervalId, setIntervalId] = useState('');
  const [disabled, setDisabled] = useState(true);

  const startTimer = (time) => {
    setRunning(true);
    let totalSeconds = time * 60;
    const id = setInterval(() => {
      if(totalSeconds === 0) {
        setRunning(false);
        setTimeHasCome(false);
        clearInterval(id);
      }
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
      setTimeHasCome(!!(totalSeconds <= 8 && totalSeconds));
      totalSeconds -= 1;
    }, 1000);
    setIntervalId(id);
  }

  const onStartButtonClick = () => {
    clearInterval(intervalId);
    startTimer(minutesReceived);
  }

  const onSavePresetButtonClick = () => {
    if(presetTimers.includes(minutesReceived)) {
      return;
    }

    if (minutesReceived && presetTimers.length < 2) {
      setPresetTimers([...presetTimers, minutesReceived]);
    }
    if (presetTimers.length === 2) {
      presetTimers.shift();
      setPresetTimers([...presetTimers, minutesReceived])
    }
  }

  const onPresetTimerButtonClick = (timer) => {
    clearInterval(intervalId);
    setMinutesReceived(timer)
    startTimer(timer);
  }

  const onPauseButtonClick = () => {
    clearInterval(intervalId);
  }

  const onPlayButtonClick = () => {
    const getAtualSeconds = (seconds) + (minutes * 60) + (hours * 3600);
    startTimer((getAtualSeconds - 1) / 60)
  }

  const onAddButtonClick = () => {
    clearInterval(intervalId);
    setMinutes(minutes + 1);
    const getAtualSeconds = (seconds) + (minutes * 60) + (hours * 3600);
    startTimer((getAtualSeconds + 59) / 60);
  }

  const stopTimer = () => {
    clearInterval(intervalId);
    setRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setMinutesReceived(0);
    setTimeHasCome(false);
  }

  const onDecreaseButtonClick = () => {
    if (minutes === 0 && hours === 0) {
      return stopTimer();
    }
    clearInterval(intervalId);
    setMinutes((minutes > 0) ? minutes - 1 : 0);
    const getAtualSeconds = (seconds) + (minutes * 60) + (hours * 3600);
    startTimer((getAtualSeconds - 61) / 60);
  }

  const handleChange = ({ target }) => {
    const { value } = target;
    const parsedValue = parseFloat(value);
    console.log(parsedValue)
    if (!parsedValue || parsedValue <= 0) {
      return setDisabled(true);
    };
    setDisabled(false)
    setMinutesReceived(parsedValue);
  }

  return (
    <>
      <div className="timerHandlers">
        <p>Insira o tempo, em minutos, do timer</p>
        <div>
          <input type="number" id="minutesInpt" onChange={ handleChange } min={ 0 }/>
          <TimerButton text="Começar" id="minutesBtn" handleClick={ onStartButtonClick } disabled={disabled}/>
          <TimerButton text="Salvar" id="savePresetBtn" handleClick={ onSavePresetButtonClick } disabled={disabled}/>
        </div>
      </div>
      <div className="timer">
        <span className="hours">{ hours > 9 ? hours : '0' + hours }:</span>
        <span className="minutes">{ minutes > 9 ? minutes : '0' + minutes}:</span>
        <span className="seconds">{ seconds > 9 ? seconds : '0' + seconds}</span>
      </div>
      <div className="buttons">
        <TimerButton text="II" id="pauseBtn" handleClick={ onPauseButtonClick } />
        <TimerButton text="&#9658;" id="playBtn" handleClick={ onPlayButtonClick } />
        <TimerButton text="Reiniciar" id="restartBtn" handleClick={ onStartButtonClick } />
        <TimerButton text="+ 1" id="addOneMinuteBtn" handleClick={ onAddButtonClick } />
        <TimerButton text="- 1" id="decreaseOneMinuteBtn" handleClick={ onDecreaseButtonClick } />
        {
          presetTimers && presetTimers.map((timer) => {
            return (
              <TimerButton text={`${timer} min`} key={ Math.random() } id="presetBtn" handleClick={ () => onPresetTimerButtonClick(timer) }/>
            )
          })
        }
      </div>
      {
        timeHasCome && <Audio isPlaying={ timeHasCome } />
      }
    </>
  );
}

export default Timer;