import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieDetails() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <div>
      MovieDetails
      <button onClick={onClick}>back</button>
    </div>
  );
}
