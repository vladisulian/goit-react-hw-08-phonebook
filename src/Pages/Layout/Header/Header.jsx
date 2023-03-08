import './Header.scss';
import { Box, Spinner } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { lazy, Suspense } from 'react';
import ContactsHeader from './ContactsHeader';
import { BiLogInCircle } from 'react-icons/bi';
import styled from 'styled-components';

const LoggedHeader = lazy(() => import('./LoggedHeader'));

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;

  position: absolute;
  left: 10px;
`;

export const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const isLogged = useSelector(selectIsLoggedIn);

  const handleLogIn = () =>
    navigation('/goit-react-hw-08-phonebook/registration');
  const showContactsHeader =
    location.pathname === '/goit-react-hw-08-phonebook/contacts';

  return (
    <>
      <Suspense
        fallback={
          <Spinner
            color="#7e0039c2"
            size={'xl'}
            emptyColor="gray.200"
            speed="900ms"
          />
        }
      >
        <header>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            className="chakra_gradient"
          />
          <Nav>
            <NavLink to={''} end className="header__logo">
              <AiFillHome />
            </NavLink>
            {isLogged && <NavLink to={'contacts'}>Contacts</NavLink>}
          </Nav>

          {showContactsHeader && <ContactsHeader />}

          {isLogged ? (
            <LoggedHeader />
          ) : (
            <>
              <p className="middle-title">Modern phonebook!</p>
              <div id="userlogIn-container" onClick={handleLogIn}>
                <BiLogInCircle />
              </div>
            </>
          )}
        </header>
      </Suspense>
    </>
  );
};
