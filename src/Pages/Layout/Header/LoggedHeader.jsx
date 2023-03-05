import { NavLink, useNavigate } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const LoggedHeader = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    console.log('logout');
    navigation('');
  };
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
    </>
  );
};

export default LoggedHeader;
