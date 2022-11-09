import { useGetMovieReviews } from 'hooks/useTrendingApi';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { id } = useParams();
  const { loading, reviews, done } = useGetMovieReviews(id);

  if (!loading && !done) return null;
  if (loading) return <h3>Loading...</h3>;
  if (!loading && done && reviews.length === 0)
    return <h4>We don't have any reviews for this movie</h4>;
  return (
    <>
      <h4>Reviews</h4>
      <ul>
        {reviews.map(it => {
          return (
            <li key={it.id}>
              <h3>Author: {it.author}</h3>
              <p> {it.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
