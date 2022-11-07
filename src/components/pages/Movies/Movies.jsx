import { useApi } from 'hooks/useApi';
import React from 'react';

export default function Movies() {
  const [movies] = useApi('/search/movie', { query: 'king' });
  console.log(movies);
  return <div>Movies</div>;
}
