import './Registration.scss';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('Registration POST method sended.');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} id={'reg-form'}>
      <h1>Create your MPK account.</h1>
      <FormLabel htmlFor={'nickname'}>
        Nickname
        <Input
          type={'text'}
          name={'nickname'}
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
          placeholder="example@mail.com"
          type={'email'}
          required
        />
      </FormLabel>

      <FormLabel htmlFor={'password'}>
        Password
        <Input
          name={'password'}
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
