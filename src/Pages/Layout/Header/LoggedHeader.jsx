import { useNavigate } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUserEmail } from 'redux/auth/auth-selectors';
import incognito from '../../../images/incognito.png';
import { Image } from '@chakra-ui/react';

const LoggedHeader = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const handleLogOut = () => {
    dispatch(logOut());
    navigation('');
  };

  return (
    <>
      <nav className="header__nav ">
        <Image src={incognito} alt="your avatar" />
        <p>{userEmail}</p>
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
