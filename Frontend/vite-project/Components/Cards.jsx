import React from 'react';
import './01_ComponentsStyling/Card.scss';
import { handleClick } from './Function';

export function Cards() {
  return (
    <a href="#" className="card" onClick={handleClick}>
      <h5 className="card__title">Noteworthy technology acquisitions 2021</h5>
      <p className="card__text">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </a>
  );
}
