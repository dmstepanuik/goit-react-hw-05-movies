import Navbar from './layouts/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';

const BASE_PATH = 'goit-react-hw-05-movies';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/${BASE_PATH}`}>
          <Route path="" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};
