import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import timerContext from '../context/timerContext';
import Audio from './Audio';
import './timer.css';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutesReceived, setMinutesReceived] = useState(0);
  const { timeHasCome, setTimeHasCome } = useContext(timerContext);
  const [intervalId, setIntervalId] = useState('');

  const startTimer = () => {
    let totalSeconds = minutesReceived*60;
    const id = setInterval(() => {
      if(totalSeconds === 0) {
        setTimeHasCome(false);
        clearInterval(id);
      }
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor(totalSeconds / 60));
      setSeconds(totalSeconds % 60);
      setTimeHasCome(!!(totalSeconds <= 8 && totalSeconds));
      totalSeconds -= 1;
    }, 1000);
    setIntervalId(id);
  }

  const onStartButtonClick = () => {
    clearInterval(intervalId);
    startTimer();
  }

  return (
    <>
      <div className="timerHandlers">
        <p>Insira o tempo, em minutos, do timer</p>
        <div>
          <input type="number" id="minutesInpt" onChange={ ({ target }) => setMinutesReceived(target.value) }/>
          <button type="button" onClick={ onStartButtonClick } id="minutesBtn">Começar</button>
        </div>
      </div>
      <div className="timer">
        <span className="hours">{ hours > 9 ? hours : '0' + hours }:</span>
        <span className="minutes">{ minutes > 9 ? minutes : '0' + minutes}:</span>
        <span className="seconds">{ seconds > 9 ? seconds : '0' + seconds}</span>
      </div>
      {
        timeHasCome && <Audio isPlaying={ timeHasCome } />
      }
    </>
  );
}

export default Timer;

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       minutesReceived: 0,
//       timeHasCome: false,
//       intervalId: '',
//     }
//   }

//   startTimer = () => {
//     const { minutesReceived } = this.state;
//     let totalSeconds = minutesReceived * 60;
//     const id = setInterval(() => {
//       if( totalSeconds === 0) {
//         this.setState({
//           timeHasCome: false,
//         })
//         clearInterval(id);
//       }
//       this.setState((prevState) => ({
//         hours: Math.floor(totalSeconds / 3600),
//         minutes: Math.floor(totalSeconds / 60),
//         seconds: totalSeconds % 60,
//         timeHasCome: !!(totalSeconds <= 8 && totalSeconds),
//       }));
//       totalSeconds -= 1;
//     }, 1000);
//     this.setState({ intervalId: id})
//   }

//   onChange = ({ target }) => {
//     const { value } = target;
//     this.setState({
//       minutesReceived: value,
//     });
//   }

//   onStartButtonClick = () => {
//     const { intervalId } = this.state;
//     clearInterval(intervalId);
//     this.startTimer();
//   }

//   render() {
//     const { hours, minutes, seconds, timeHasCome } = this.state;
//     return (
//       <>
//         <div className="timerHandlers">
//           <p>Insira o tempo, em minutos, do timer</p>
//           <div>
//             <input type="number" id="minutesInpt" onChange={ this.onChange }/>
//             <button type="button" onClick={ this.onStartButtonClick } id="minutesBtn">Começar</button>
//           </div>
//         </div>
//         <div className="timer">
//           <span className="hours">{ hours > 9 ? hours : '0' + hours }:</span>
//           <span className="minutes">{ minutes > 9 ? minutes : '0' + minutes}:</span>
//           <span className="seconds">{ seconds > 9 ? seconds : '0' + seconds}</span>
//         </div>
//         {
//           timeHasCome && <Audio isPlaying={ timeHasCome } />
//         }
//       </>
//     )
//   }
// }

// export default Timer;