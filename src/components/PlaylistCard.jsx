import React, { useContext } from 'react';
import timerContext from '../context/timerContext';

function PlaylistCard({ gender, image }) {
  const { choosenGender, setChoosenGender } = useContext(timerContext);
  return (
    <div className={choosenGender === gender ? 'card selected' : 'card'} onClick={ () => setChoosenGender(gender)} >
      <img src={ image } alt="" />
      <span>{ gender }</span>
    </div>
  );
}

export default PlaylistCard;