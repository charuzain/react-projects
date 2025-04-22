import { useEffect, useState } from 'react';
import './App.css';
import MovieListContainer from './components/MovieListContainer';
import NavBar from './components/NavBar';
import WatchedMovieContainer from './components/WatchedMovieContainer';

const API_KEY = '750cb857';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const queryHandler = (e) => {
    setQuery(e.target.value);
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
          />
        )}
        {error && <p>{`🛑 ${error} 🛑`}</p>}
        <WatchedMovieContainer
          selectedId={selectedId}
        />
      </main>
    </>
  );
}

export default App;
