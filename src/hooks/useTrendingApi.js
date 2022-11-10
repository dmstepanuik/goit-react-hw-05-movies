import axios from 'axios';
import { useState, useEffect } from 'react';

import { useIsFirstRender } from './useFirstRender';

const API_KEY = 'f860fd14767163b7a314379672b23f90';

const themoviedb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export function useTrendingApi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    themoviedb.get('/trending/movie/day').then(res => {
      setData(res.data.results);
      setLoading(false);
    });
  }, []);

  return [data, loading];
}

export function useSearchMovies(initSearch = '') {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(initSearch);
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (isFirst.current || search === '') return;

    const options = {
      params: {
        query: search,
      },
    };

    setLoading(true);
    themoviedb.get('/search/movie', options).then(res => {

      setMovies(res.data.results);
      setLoading(false);
    });
  }, [isFirst, search]);
  // console.log(movies);

  return { movies, setSearch, loading };
}

export function useGetMovieDetails(movieId) {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    themoviedb.get(`/movie/${movieId}`).then(res => {
      // console.log(res);
      setMovie(res.data);
      setDone(true);
      setLoading(false);
    });
  }, [movieId]);

  return { loading, movie, done };
}

export function useGetMovieCast(movieId) {
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    themoviedb.get(`/movie/${movieId}/credits`).then(res => {
      setCast(res.data.cast);
      setDone(true);
      setLoading(false);
    });
  }, [movieId]);

  return { loading, cast, done };
}

export function useGetMovieReviews(movieId) {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState({});

  const [done, setDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    themoviedb.get(`/movie/${movieId}/reviews`).then(res => {
      setReviews(res.data.results);
      // console.log(res.data.results);
      setDone(true);
      setLoading(false);
    });
  }, [movieId]);

  return { loading, reviews, done };
}
