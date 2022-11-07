import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? s.linkActive : s.link);
  return (
    <>
      <nav className={s.container}>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
        <NavLink className={linkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </>
  );
}
