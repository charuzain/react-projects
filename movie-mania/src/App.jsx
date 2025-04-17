import './App.css';
import MovieListContainer from './components/MovieListContainer';
import NavBar from './components/NavBar';
import WatchedMovieContainer from './components/WatchedMovieContainer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <MovieListContainer />
        <WatchedMovieContainer />
      </main>
    </>
  );
}

export default App;
