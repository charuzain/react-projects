import React, { useEffect, useState } from 'react';
import './MovieDetail.scss';
import StarRating from './StarRating';

const API_KEY = '750cb857';

const MovieDetail = ({
  selectedId,
  addMovieHandler,
  watchedMovies,
  displayMovieDetailHandler,
}) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [rating, setRating] = useState(0);

  const onClickStar = (rating) => {
    setRating(rating);
  };

  useEffect(() => {
    async function fetchSelectedMovie() {
      await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSelectedMovie(data);
        });
    }
    fetchSelectedMovie();
  }, [selectedId]);

  return (
    <>
      <header className="selected-movie">
        <div className="back" onClick={displayMovieDetailHandler}>
          ←
        </div>
        <img
          src={selectedMovie.Poster}
          alt="Movie poster"
          className="selected-movie__image"
        />
        <div className="selected-movie__details">
          <p className="selected-movie__title">{selectedMovie.Title}</p>
          <div className="selected-movie__sub-detail">
            <p>{`🗓 ${selectedMovie.Released}`}</p>
            <p>{`🕰 ${selectedMovie.Runtime}`}</p>
          </div>
          <p>{`⭐️ ${selectedMovie.imdbRating} IMBD Rating`}</p>

          <p>{selectedMovie.Genre}</p>
        </div>
      </header>
      {watchedMovies.filter((movie) => movie.imdbID === selectedId).length >
      0 ? (
        <p>
          You have given{' '}
          {
            watchedMovies.filter((movie) => movie.imdbID === selectedId)[0]
              .userRating
          }{' '}
          🌟 to this movie
        </p>
      ) : (
        <section className="selected-movie__rating-section">
          <div className="star-container">
            <div className="star">
              <StarRating onClickStar={onClickStar} rating={rating} />
            </div>
            <p>{rating > 0 ? rating : ''}</p>
          </div>
          <button
            className="selected-movie__btn"
            onClick={() =>
              addMovieHandler({
                imdbID: selectedMovie.imdbID,
                Poster: selectedMovie.Poster,
                Title: selectedMovie.Title,
                imdbRating: selectedMovie.imdbRating,
                userRating: rating,
                Runtime: selectedMovie.Runtime,
              })
            }
          >
            + Add to List
          </button>
        </section>
      )}
      <section className="selected-movie__description">
        <p className="movie-plot">{selectedMovie.Plot}</p>
        <p className="movie-actors">{`Starring:${selectedMovie.Actors}`}</p>
        <p className="movie-director">{`Director: ${selectedMovie.Director}`}</p>
      </section>
    </>
  );
};

export default MovieDetail;
