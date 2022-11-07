import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const API_KEY = 'f860fd14767163b7a314379672b23f90';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export function useApi(url, params) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const currentParams = useRef(params || {});

  useEffect(() => {
    const options = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        ...currentParams.current,
      },
    };
    setLoading(true);
    axios.get(url, options).then(res => {
      setData(res.data.results);
      setLoading(false);
    });
  }, [params, url]);

  return [data, loading];
}
