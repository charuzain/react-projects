import React from 'react';
import './WatchedMovieContainer.scss';
import Statistics from './Statistics';

// http://www.omdbapi.com/?i=tt15434074&plot=full

const WatchedMovieContainer = ({ selectedId }) => {
  return (
    <div className='watched-movie'>
      <Statistics />
      <div>WatchedMovieList</div>
      <div className="watched-movie">{selectedId}</div>
    </div>
  );
};

export default WatchedMovieContainer;
