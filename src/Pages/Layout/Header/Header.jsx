import './Header.css';
import { Box } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';

import ContactsHeader from './ContactsHeader';
import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from 'redux/auth/auth-selectors';

export const Header = () => {
  const location = useLocation();
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoggedIn);

  // console.log(useSelector(authSelectors));
  const showHomepageHeader =
    location.pathname === '/goit-react-hw-08-phonebook';
  const showContactsHeader =
    location.pathname === '/goit-react-hw-08-phonebook/contacts';

  return (
    <header>
      <Box
        w="100%"
        h="200px"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        className="chakra_gradient"
      />

      <NavLink to={''} end className="header__logo">
        <AiFillHome />
      </NavLink>

      {showHomepageHeader && <p className="middle-title">Modern phonebook!</p>}
      {showContactsHeader && <ContactsHeader />}

      <nav className="header__nav">
        <NavLink to={'contacts'}>Contacts</NavLink>
        <NavLink to={'registration'}>Register</NavLink>
      </nav>
    </header>
  );
};
