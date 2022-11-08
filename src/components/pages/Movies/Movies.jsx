import MovieList from 'components/common/MovieList/MovieList';
import SearchForm from 'components/common/SearchForm/SearchForm';
import { useSearchMovies } from 'hooks/useTrendingApi';

export default function Movies() {
  const { movies, setSearch } = useSearchMovies('');

  // console.log(movies);
  return (
    movies && (
      <>
        <h1>Movies</h1>;
        <SearchForm setSearch={setSearch} />
        <MovieList movies={movies} />
      </>
    )
  );
}
