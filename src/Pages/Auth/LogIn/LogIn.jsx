import './LogIn.scss';
import { Button, FormLabel, Input } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/auth-operations';
import { useState } from 'react';
const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail(''); // reset
    setPassword(''); // reset
    setTimeout(() => navigate('/goit-react-hw-08-phonebook'), 150); // * its needed to view a text for LOGGED user. (useSelector has a delay in homepage.jsx;)
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit} id={'reg-form'}>
        <h1>Log in your MPK account.</h1>
        <FormLabel htmlFor={'email'}>
          Email
          <Input
            name={'email'}
            value={email}
            onChange={handleChange}
            type={'email'}
            required
          />
        </FormLabel>

        <FormLabel htmlFor={'password'}>
          Password
          <Input
            name={'password'}
            value={password}
            onChange={handleChange}
            placeholder="*********"
            type={'password'}
            required
          />
        </FormLabel>

        <Button colorScheme="blue" mr={3} w={150} type="submit">
          Log in
        </Button>
      </form>
    </>
  );
};
export default LogIn;
