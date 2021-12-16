import React from 'react';

function TimerButton({ handleClick, id, text, disabled }) {
  return (
    <button type='button' id={ id } onClick={ handleClick } disabled={ disabled }>{ text }</button>
  );
}

export default TimerButton;