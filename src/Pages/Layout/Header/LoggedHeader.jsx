import { NavLink, useNavigate } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import Welcome from './loggedHeader/Welcome';

const LoggedHeader = () => {
  const navigation = useNavigate();
  const handleLogOut = () => navigation('');
  return (
    <>
      <nav className="header__nav ">
        <NavLink to={'contacts'}>Contacts</NavLink>
        <BiLogInCircle
          fontSize={30}
          onClick={handleLogOut}
          style={{ cursor: 'pointer' }}
        />
      </nav>
      <Welcome />
    </>
  );
};

export default LoggedHeader;
