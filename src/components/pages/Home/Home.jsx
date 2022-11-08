import { useTrendingApi } from 'hooks/useTrendingApi';
import { NavLink } from 'react-router-dom';

function Home() {
  const [movies] = useTrendingApi('/trending/movie/day');

  return (
    movies && (
      <>
        <h1>Trending today</h1>;
        <ul>
          {movies.map(movie => {
            // console.log(movie);
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </>
    )
  );
}

export default Home;
