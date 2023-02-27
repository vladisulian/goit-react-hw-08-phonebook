import { NavLink } from 'react-router-dom';
import './Layout.css';
import { AiFillHome } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to={''}>
          <AiFillHome className="HomeSVG" />
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Here is footer</p>
      </footer>
    </>
  );
};
