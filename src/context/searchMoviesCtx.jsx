import { createContext, useMemo, useRef} from 'react';

const initCtx = {
  search: '',
  movies: [],
};

export const searchMoviesCtx = createContext(initCtx);

export default function SearchMoviesCtx({ children }) {
  // const [search, setSearch] = useState(initCtx.search);
  const searchRef = useRef(initCtx.search);
  // const [movies, setMovies] = useState(initCtx.movies);
  const moviesRef = useRef(initCtx.movies);
  const providerValue = useMemo(() => ({ searchRef, moviesRef }), []);

  return (
    <searchMoviesCtx.Provider value={providerValue}>
      {children}
    </searchMoviesCtx.Provider>
  );
}
