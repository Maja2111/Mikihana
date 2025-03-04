import React from 'react';
import '@style/Card.scss';

export function Cards({ onClickHandler, title, text, imageUrl }) {
  return (
    <div className="card" onClick={onClickHandler}>
      {imageUrl && <img src={imageUrl} alt={title} className="card__image" />}
      <h5 className="card__title">{title}</h5>
      <p className="card__text">{text}</p>
    </div>
  );
}
