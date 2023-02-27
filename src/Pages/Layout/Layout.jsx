import { NavLink } from 'react-router-dom';
import './Layout.css';
import { AiFillHome } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <>
      <header>
        <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" className='chakra_gradient' />

        <NavLink to={''} className="header__logo">
          {/* Home */}
          <AiFillHome  />
        </NavLink>
        <nav className="header__nav">
          <NavLink to={'contacts'}>Contacts</NavLink>
          <NavLink to={''}>Register</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};
