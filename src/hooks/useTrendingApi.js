import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const API_KEY = 'f860fd14767163b7a314379672b23f90';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export function useTrendingApi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    };
    setLoading(true);
    axios.get('/trending/movie/day', options).then(res => {
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

  useEffect(() => {
    const options = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: search,
      },
    };
    setLoading(true);
    axios.get('/search/movie', options).then(res => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }, [search]);
  console.log(movies);

  return { movies, setSearch, loading };
}
