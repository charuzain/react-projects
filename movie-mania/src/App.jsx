import { useEffect, useState } from 'react';
import './App.css';
import MovieListContainer from './components/MovieListContainer';
import NavBar from './components/NavBar';
import WatchedMovieContainer from './components/MovieDetail';
import Statistics from './components/Statistics';
import MovieDetail from './components/MovieDetail';
import WatchedMovie from './components/WatchedMovie';

const API_KEY = '750cb857';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [displayMovieDetail, setDisplayMovieDetail] = useState(false);

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const movieClickHandler = (id) => {
    setSelectedId(id);
    setShowMovieDetail(!showMovieDetail);
  };

  const addMovieHandler = (newWatchedMovie) => {
    setWatchedMovies([...watchedMovies, newWatchedMovie]);
    displayMovieDetailHandler();
  };

  const displayMovieDetailHandler = () => {
    setDisplayMovieDetail(!displayMovieDetail);
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
          setLoading(false);
        })
        .catch((error) => {
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
      <NavBar query={query} queryHandler={queryHandler} />
      <main>
        {loading && <p>Loading.....</p>}
        {!error && !loading && (
          <MovieListContainer
            movies={movies}
            setSelectedId={setSelectedId}
            movieClickHandler={movieClickHandler}
            displayMovieDetailHandler={displayMovieDetailHandler}
          />
        )}
        {error && <p>{`🛑 ${error} 🛑`}</p>}
        <div className="right-container">
          <div className="close close-watched">-</div>

          {!displayMovieDetail && <Statistics />}
          {watchedMovies.length > 0 && !displayMovieDetail && (
            <WatchedMovie
              removeMovieHandler={removeMovieHandler}
              watchedMovies={watchedMovies}
            />
          )}
          {selectedId && displayMovieDetail && (
            <MovieDetail
              selectedId={selectedId}
              addMovieHandler={addMovieHandler}
              watchedMovies={watchedMovies}
              displayMovieDetailHandler={displayMovieDetailHandler}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
