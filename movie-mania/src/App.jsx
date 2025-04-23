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

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const movieClickHandler = (id) => {
    setSelectedId(id);
    setShowMovieDetail(!showMovieDetail);
  };

  const addMovieHandler = (newWatchedMovie) => {
    setWatchedMovies([...watchedMovies, newWatchedMovie]);
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
          />
        )}
        {error && <p>{`🛑 ${error} 🛑`}</p>}
        <div className="right-container">
          <div className="close close-watched">-</div>

          {!selectedId && <Statistics />}
          {watchedMovies.length > 0 && (
            <WatchedMovie watchedMovies={watchedMovies} />
          )}
          {selectedId && (
            <MovieDetail
              selectedId={selectedId}
              addMovieHandler={addMovieHandler}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
