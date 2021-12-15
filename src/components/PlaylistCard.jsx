import React, { useContext } from 'react';
import timerContext from '../context/timerContext';

function PlaylistCard({ gender, image }) {
  const { setChoosenGender } = useContext(timerContext);
  return (
    <div className='card' onClick={ () => setChoosenGender(gender)} >
      <img src={ image } alt="" />
      <span>{ gender }</span>
    </div>
  );
}

export default PlaylistCard;