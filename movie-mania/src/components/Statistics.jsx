import React from 'react';
import './Statistics.scss';

const Statistics = ({
  noOfMovieWatched,
  totalWatchTime,
  avgImdbRating,
  avgUserRating,
}) => {
  return (
    <div className="stat">
      <div className="stat__card">
        <p className="stat__title">Movies you watched</p>
        <div className="stat__container">
          <div className="stat__movies"># {noOfMovieWatched} movies</div>
          <div className="stat__rating">
            ⭐️ {parseFloat(avgImdbRating.toFixed(1))}
          </div>

          <div className="stat__rating">🌟 {parseFloat(avgUserRating.toFixed(1))}</div>
          <div className="stat__timing">⏳ {totalWatchTime} mins</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
