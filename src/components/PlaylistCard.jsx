import React, { useContext } from 'react';
import timerContext from '../context/timerContext';

function PlaylistCard({ gender, image }) {
  const { choosenGender, setChoosenGender } = useContext(timerContext);

  const getGender = (currGender) => {
    switch (currGender) {
      case 'VelociROCKtor': 
        return 'ROCK';
      case 'ParasauroLO-FI':
        return 'LO-FI';
      case 'POPteranodon':
        return 'POP';
      default: 
        return undefined;
    }
  }
  
  const currentGender = getGender(gender);

  return (
    <div className={choosenGender === gender ? 'card selected' : 'card'} onClick={ () => setChoosenGender(gender)} >
      <img src={ image } alt="" />
      <span>{ gender }</span>
      <p className='gender'>{ currentGender }</p>
    </div>
  );
}

export default PlaylistCard;