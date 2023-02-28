import './Form.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAPI } from 'redux/operations';
import styled from 'styled-components';
import './AddContact.css';
const {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} = require('@chakra-ui/react');
const { useRef } = require('react');
const AddContactContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: black;
`;

export const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setNumber] = useState('');

  const handleChange = e => {
    const stateName = e.currentTarget.name;
    const stateValue = e.currentTarget.value;

    switch (stateName) {
      case 'name':
        setName(stateValue);
        break;

      case 'phone':
        setNumber(stateValue);
        break;

      case 'surname':
        setSurname(stateValue);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    const phone = form.elements.phone.value;
    const contact = { name, surname, phone };
    console.log(contact);

    dispatch(addContactAPI(contact));

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <AddContactContainer>
      <Button
        onClick={onOpen}
        fontSize={36}
        borderRadius={'45%'}
        color={'black'}
      >
        +
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form autoComplete="off" onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>Add to contacts</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel htmlFor={'name'}>First name</FormLabel>
                <Input
                  name={'name'}
                  ref={initialRef}
                  placeholder="First name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor={'surname'}>Surname</FormLabel>
                <Input
                  name={'surname'}
                  ref={initialRef}
                  placeholder="Surname"
                />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel htmlFor={'phone'}>Phone number</FormLabel>
                <Input name={'phone'} placeholder="Last name" />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={'center'}>
              <Button colorScheme="blue" mr={3} w={150} type="submit">
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </AddContactContainer>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSubmit: PropTypes.func,
};

{
  /* <form
        autoComplete="off"
        className="Phonebook__form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Name <br />
          <input
            type="text"
            name="name"
            className="Phonebook__form-input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          Number <br />
          <input
            type="tel"
            name="phone"
            className="Phonebook__form-input"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>
        {!isLoading ? (
          <Button
            width={250}
            borderRadius={20}
            colorScheme="teal"
            variant="outline"
            type="submit"
          >
            Submit
          </Button>
        ) : (
          <Button
            width={250}
            borderRadius={20}
            isLoading
            loadingText="Sending"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
          ></Button>
        )}
      </form> */
}
