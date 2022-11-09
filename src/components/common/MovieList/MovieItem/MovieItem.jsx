import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MovieItem({ id, title }) {
  const location = useLocation();
  // const navigate = useNavigate();
  // console.dir(navigate);
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
}
