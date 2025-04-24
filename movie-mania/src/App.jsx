import { useEffect, useState } from 'react';
import './App.css';
import MovieListContainer from './components/MovieListContainer';
import NavBar from './components/NavBar';
import Statistics from './components/Statistics';
import MovieDetail from './components/MovieDetail';
import WatchedMovie from './components/WatchedMovie';
import Container from './components/Container';

const API_KEY = '750cb857';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const noOfMovieWatched = watchedMovies.length || 0;

  const totalWatchTime = watchedMovies.reduce(
    (a, movie) => a + parseInt(movie.Runtime),
    0
  );

  const avgImdbRating =
    watchedMovies.reduce((a, c) => a + Number(c.imdbRating), 0) /
      watchedMovies.length || 0;

  const avgUserRating =
    watchedMovies.reduce((a, c) => a + c.userRating, 0) /
      watchedMovies.length || 0;

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const movieClickHandler = (id) => {
    if (id === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  const addMovieHandler = (newWatchedMovie) => {
    setWatchedMovies([...watchedMovies, newWatchedMovie]);
    setSelectedId(null);
  };

  const displayMovieDetailHandler = () => {
    setSelectedId(null);
  };

  const removeMovieHandler = (id) => {
    const filteredMovie = watchedMovies.filter((movie) => movie.imdbID !== id);
    setWatchedMovies(filteredMovie);
  };

  useEffect(() => {
    async function fetchMovie() {
      setError(false);
      setLoading(true);
      await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network Error');
          }
          return res.json();
        })
        .then((data) => {
          if (data.Response === 'False') {
            throw new Error(`Movie ${query} not found`);
          }

          setMovies(data.Search);
          // setLoading(false);
        })
        .catch((error) => {
          setMovies([]);
          setError(error.message);
        })

        .finally(() => {
          setLoading(false);
        });
    }
    if (query.trim().length < 3) {
      setMovies([]);
      setError(false);

      return;
    }

    fetchMovie();
  }, [query]);

  return (
    <>
      <NavBar query={query} queryHandler={queryHandler} movies={movies} />
      <main>
        <Container>
          {!error && !loading && movies.length === 0 && (
            <p>Search for a movie!</p>
          )}
          {loading && <p>Loading.....</p>}
          {!error && !loading && (
            <MovieListContainer
              movies={movies}
              movieClickHandler={movieClickHandler}
            />
          )}
          {error && <p>{`🛑 ${error} 🛑`}</p>}
        </Container>

        <Container>
          {!selectedId && (
            <Statistics
              noOfMovieWatched={noOfMovieWatched}
              totalWatchTime={totalWatchTime}
              avgImdbRating={avgImdbRating}
              avgUserRating={avgUserRating}
            />
          )}
          {watchedMovies.length > 0 && !selectedId && (
            <WatchedMovie
              removeMovieHandler={removeMovieHandler}
              watchedMovies={watchedMovies}
              movieClickHandler={movieClickHandler}
            />
          )}
          {selectedId && (
            <MovieDetail
              selectedId={selectedId}
              addMovieHandler={addMovieHandler}
              watchedMovies={watchedMovies}
              displayMovieDetailHandler={displayMovieDetailHandler}
            />
          )}
        </Container>
      </main>
    </>
  );
}

export default App;
