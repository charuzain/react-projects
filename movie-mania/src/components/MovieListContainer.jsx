import './MovieListContainer.scss';

const MovieListContainer = ({
  movies,
  movieClickHandler  
}) => {
  return (
    <ul className="movie">
      {movies.map((movie) => (
        <li
          key={movie.imdbID}
          className="movie__item"
          onClick={() => {
            movieClickHandler(movie.imdbID);
          }}
        >
          <div className="movie__image-container">
            <img src={movie.Poster} alt={`Poster`} className="movie__poster" />
          </div>
          <div className="movie__detail">
            <p>{movie.Title}</p>
            <p>🗓 {movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieListContainer;
