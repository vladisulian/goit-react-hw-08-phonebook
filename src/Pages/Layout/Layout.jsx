import { NavLink, useLocation } from 'react-router-dom';
import './Layout.css';
import { AiFillHome } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { FilterBar } from 'Pages/Contacts/Filter/Filter';

export const Layout = () => {
  const location = useLocation();
  const showHomepageHeader =
    location.pathname === '/goit-react-hw-08-phonebook';
  return (
    <>
      <header>
        <Box
          w="100%"
          h="200px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          className="chakra_gradient"
        />

        <NavLink to={''} className="header__logo">
          {/* Home */}
          <AiFillHome />
        </NavLink>
        {showHomepageHeader ? (
          <p className="header__middle-title">Modern phonebook!</p>
        ) : (
          <FilterBar />
        )}
        <nav className="header__nav">
          <NavLink to={'contacts'}>Contacts</NavLink>
          <NavLink to={'register'}>Register</NavLink>
        </nav>
      </header>
      <Suspense fallback={<h4>Please, wait a bit. Loading...</h4>}>
        <Outlet />
      </Suspense>
    </>
  );
};
