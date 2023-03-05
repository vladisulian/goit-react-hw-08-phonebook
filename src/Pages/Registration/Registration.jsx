import './Registration.scss';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as authOperations from 'redux/auth/auth-operations';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    console.log('Registration POST method sended.');

    setName(''); // reset
    setEmail(''); // reset
    setPassword(''); // reset

    navigate('/goit-react-hw-08-phonebook/contacts');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} id={'reg-form'}>
      <h1>Create your MPK account.</h1>
      <FormLabel htmlFor={'nickname'}>
        Nickname
        <Input
          type={'text'}
          name={'name'}
          value={name}
          onChange={handleChange}
          placeholder="programmer2301"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel htmlFor={'email'}>
        Email
        <Input
          name={'email'}
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
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

      <Checkbox required>
        I accept the terms of the
        <NavLink to={'/goit-react-hw-08-phonebook/agreement'}>
          MPK agreement
        </NavLink>
      </Checkbox>

      <Button colorScheme="blue" mr={3} w={150} type="submit">
        Create account
      </Button>
    </form>
  );
};

export default Register;
