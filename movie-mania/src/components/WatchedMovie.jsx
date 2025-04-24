import React from 'react';
import './WatchedMovie.scss';

const WatchedMovie = ({
  watchedMovies,
  removeMovieHandler,
  movieClickHandler,
}) => {
  return (
    <ul>
      {watchedMovies.map((movie) => (
        <li
          key={movie.imdbID}
          className="watched-movie"
          onClick={() => movieClickHandler(movie.imdbID)}
        >
          <img
            src={movie.Poster}
            alt="Poster"
            className="watched-movie__image"
          />
          <div className="watched-movie__details">
            <p className="watched-movie__title"> {movie.Title}</p>
            <div className="watched-movie__sub-detail">
              <p className="watched-movie__rating">⭐️{movie.imdbRating}</p>
              <p className="watched-movie__user-rating">🌟{movie.userRating}</p>
              <p className="watched-movie__time">🕰{movie.Runtime}</p>
            </div>
          </div>
          <div
            className="watched-movie__cancel"
            onClick={(e) => {
              e.stopPropagation();
              removeMovieHandler(movie.imdbID);
            }}
          >
            ❌
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WatchedMovie;
