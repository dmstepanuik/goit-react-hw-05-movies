import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Navbar from './layouts/Navbar/Navbar';
import MovieDetails from './pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};
