import { useSearchMovies } from 'hooks/useTrendingApi';

export default function Movies() {
  const { movies, setSearch } = useSearchMovies('cat');
  // console.log(movies);
  return (
    movies && (
      <>
        <h1>Movies</h1>;
        <ul>
          {movies.map(movie => {
            console.log(movie);
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </>
    )
  );
}
