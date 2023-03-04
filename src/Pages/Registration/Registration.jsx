import './Registration.scss';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Register = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('Registration POST method sended.');
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit} id={'reg-form'}>
      <h1>Your contacts are always in your hands!</h1>
      <FormControl className='form-control' isRequired>
        <FormLabel htmlFor={'nickname'}>Nickname</FormLabel>
        <Input
          name={'nickname'}
          placeholder="programmer2301"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FormControl>

      <FormControl className='form-control' mt={4} isRequired>
        <FormLabel htmlFor={'email'}>Email</FormLabel>
        <Input name={'email'} placeholder="example@mail.com" />
      </FormControl>

      <FormControl className='form-control' mt={4} isRequired>
        <FormLabel htmlFor={'password'}>Password</FormLabel>
        <Input
          name={'password'}
          placeholder="*********"
          type={'password'}
        />
      </FormControl>

      <Button colorScheme="blue" mr={3} w={150} type="submit">
        Save
      </Button>
    </form>
  );
};

export default Register;
