import React, { useState } from 'react';
import './MovieListContainer.scss';

const MovieListContainer = ({
  movies,
  movieClickHandler,
  displayMovieDetailHandler,
}) => {
  const [showList, setShowList] = useState(true);

  return (
    <div className="movie">
      <div className="close" onClick={() => setShowList(!showList)}>
        –
      </div>
      {showList && (
        <ul className="movie__list">
          {movies.map((movie) => (
            <li
              key={movie.imdbID}
              className="movie__item"
              onClick={() => {
                movieClickHandler(movie.imdbID);
                displayMovieDetailHandler();
              }}
            >
              <div className="movie__image-container">
                <img
                  src={movie.Poster}
                  alt={`Poster`}
                  className="movie__poster"
                />
              </div>
              <div className="movie__detail">
                <p>{movie.Title}</p>
                <p>🗓 {movie.Year}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieListContainer;
