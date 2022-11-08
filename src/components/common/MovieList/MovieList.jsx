import React from 'react';
import MovieItem from './MovieItem/MovieItem';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return <MovieItem key={movie.id} title={movie.title} />;
      })}
    </ul>
  );
}
