import Navbar from './layouts/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import { BASE_PATH } from 'variables/variables';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={BASE_PATH} element={<Home />}>
          <Route path="" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};
