import React from 'react';
import './Statistics.scss';

const Statistics = () => {
  return (
    <div className="stat">
      <div className="close">-</div>
      <div className="stat__card">
        <p className="stat__title">Movies you watched</p>
        <div className="stat__container">
          <div className="stat__movies"># 2 movies</div>
          <div className="stat__rating">⭐️ 7.40</div>
          <div className="stat__rating">🌟 7.40</div>

          <div className="stat__timing">⏳ 400 mins</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
