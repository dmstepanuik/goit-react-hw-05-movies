import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_PATH } from 'variables/variables';

export default function MovieItem({ id, title }) {
  // const location = useLocation();
  // const navigate = useNavigate();
  // console.dir(navigate);
  return (
    <li>
      <Link to={`${BASE_PATH}/movies/${id}`}>{title}</Link>
    </li>
  );
}
