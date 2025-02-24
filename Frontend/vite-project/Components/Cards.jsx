import React from 'react';
import './01_ComponentsStyling/Card.scss';

export function Cards({ onClickHandler, title, text }) {
  return (
    <div className="card" onClick={onClickHandler}>
      <h5 className="card__title">{title}</h5>
      <p className="card__text">{text}</p>
    </div>
  );
}
