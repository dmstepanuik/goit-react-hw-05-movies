import MovieList from 'components/common/MovieList/MovieList';
import { useTrendingApi } from 'hooks/useTrendingApi';

function Home() {
  const [movies] = useTrendingApi('/trending/movie/day');

  return (
    movies && (
      <>
        <h1>Trending today</h1>;
        <MovieList movies={movies} />
      </>
    )
  );
}

export default Home;
