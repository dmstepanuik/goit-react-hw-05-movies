import { useGetMovieDetails } from 'hooks/useTrendingApi';
import React, { useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { IMAGE_PATH } from 'variables/variables';
import s from './MovieDetails.module.scss';

export default function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [fromLocation] = useState(() => location?.state?.from);
  const { loading, movie, done } = useGetMovieDetails(id);

  const { title, release_date, overview, genres, poster_path, vote_average } =
    movie;

  if (!loading && !done) return null;
  if (loading) return <h3>Loading...</h3>;
  if (!loading && done) {
    const imgUrl = `${IMAGE_PATH}${poster_path}`;
    const year = release_date.slice(0, 4);
    const headTitle = `${title} (${year})`;
    const genresString = genres
      .map(x => {
        return x.name;
      })
      .join(', ');

    return (
      <div>
        <Link to={fromLocation || '/'}>back</Link>

        <div>
          <img src={imgUrl} alt="" width={200} />
        </div>
        <h2>{headTitle}</h2>

        <p>{overview}</p>
        <p>{genresString}</p>
        <p>{vote_average}</p>

        <div className={s.linkList}>
          <NavLink to={'cast'}>Cast</NavLink>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </div>

        <Outlet />
      </div>
    );
  }
}
