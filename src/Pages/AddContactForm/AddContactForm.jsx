import './AddContactForm.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAPI } from 'redux/operations';
import { AiOutlineUserAdd } from 'react-icons/ai';
import styled from 'styled-components';
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
const AddContactContainer = styled.div`
  color: black;
  margin-right: 15px;
`;
const { useRef } = require('react');

export const AddContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    const phone = form.elements.phone.value;
    const contact = { name, surname, phone };
    // console.log('Added contact', contact);
    dispatch(addContactAPI(contact));

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setSurname('');
    setPhone('');
  };

  return (
    <AddContactContainer className="add-contacts-container">
      <Button
        onClick={onOpen}
        fontSize={36}
        borderRadius={'45%'}
        colorScheme={'rgb(0 0 0 / 35%);'}
        color={'black'}
        style={{ width: '52px', borderRadius: '5px' }}
        className={'AddContactButton'}
      >
        <AiOutlineUserAdd style={{ minWidth: '50px', fill: 'white' }} />
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
            <ModalCloseButton className="modal-close-button" />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel htmlFor={'name'}>First name</FormLabel>
                <Input
                  name={'name'}
                  ref={initialRef}
                  placeholder="First name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
                <Input
                  name={'phone'}
                  placeholder="+(380)-123-45-67"
                  type={'number'}
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={'center'}>
              <Button colorScheme="blue" mr={3} w={150} type="submit">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </AddContactContainer>
  );
};

AddContactForm.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  phone: PropTypes.string,
  onSubmit: PropTypes.func,
};
