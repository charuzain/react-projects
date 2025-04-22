import React from 'react'

const MovieListContainer = ({movies}) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <div>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          </div>
          <div>
            <p>{movie.Title}</p>
            <p>🗓 {movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieListContainer