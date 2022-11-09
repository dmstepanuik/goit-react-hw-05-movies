import { useGetMovieCast } from 'hooks/useTrendingApi';
import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_PATH } from 'variables/variables';
import defaultImg from 'img/default_photo.png';

export default function Cast() {
  const { id } = useParams();
  const { loading, cast, done } = useGetMovieCast(id);
  if (!loading && !done) return null;
  if (loading) return <h3>Loading...</h3>;
  return (
    <>
      <h4>Cast</h4>
      <ul>
        {cast.map(it => {
          const imgUrl = it.profile_path
            ? `${IMAGE_PATH}${it.profile_path}`
            : defaultImg;

          return (
            <li key={it.id}>
              <h2>Character:{it.character}</h2>
              <p>Name:{it.name}</p>
              <img src={imgUrl} alt="" width={50} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
