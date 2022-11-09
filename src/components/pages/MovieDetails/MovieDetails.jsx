import { useGetMovieDetails } from 'hooks/useTrendingApi';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieDetails({ title, id }) {
  const navigate = useNavigate();
  const { loading } = useGetMovieDetails(id);
  const onClick = () => {
    navigate(-1);
  };
  return (
    <div>
      MovieDetails
      <button onClick={onClick}>back</button>
      <h2>{title}</h2>
    </div>
  );
}
