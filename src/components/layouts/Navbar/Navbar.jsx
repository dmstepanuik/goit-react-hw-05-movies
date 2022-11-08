import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { BASE_PATH } from 'variables/variables';

export default function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? s.linkActive : s.link);
  return (
    <>
      <nav className={s.container}>
        <NavLink className={linkClass} to={BASE_PATH}>
          Home
        </NavLink>
        <NavLink className={linkClass} to={`${BASE_PATH}/movies`}>
          Movies
        </NavLink>
      </nav>
    </>
  );
}
