import { useApi } from 'hooks/useApi';

function Home() {
  const [data] = useApi('/trending/movie/day');

  return (
    movies && (
      <>
        <h1>Trending today</h1>;
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

export default Home;
