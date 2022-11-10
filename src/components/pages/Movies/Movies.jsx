import MovieList from 'components/common/MovieList/MovieList';
import SearchForm from 'components/common/SearchForm/SearchForm';
import { searchMoviesCtx } from 'context/searchMoviesCtx';
import { useSearchMovies } from 'hooks/useTrendingApi';
import { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function Movies() {
  const { moviesRef } = useContext(searchMoviesCtx);
  const location = useLocation();

  const { movies, setSearch } = useSearchMovies('');

  const curretnMovies = useMemo(() => {
    if (location.state !== 'MovieDetails') {
      moviesRef.current = movies;
      return movies;
    }
    location.state = null;
    return moviesRef.current;
  }, [location, moviesRef, movies]);

  return (
    curretnMovies && (
      <>
        <h1>Movies</h1>
        <SearchForm setSearch={setSearch} />
        <MovieList movies={curretnMovies} />
      </>
    )
  );
}
