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
// position: absolute;
// top: 0;
// right: 0;

const { useRef } = require('react');

export const AddContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    const phone = form.elements.phone.value;
    const contact = { name, surname, phone };
    console.log('Added contact', contact);

    dispatch(addContactAPI(contact));

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <AddContactContainer className="add-contacts-container">
      <Button
        onClick={onOpen}
        fontSize={36}
        borderRadius={'45%'}
        color={'black'}
        style={{ width: '52px', borderRadius: '5px' }}
      >
        <AiOutlineUserAdd style={{ minWidth: '50px' }} />
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
            <ModalCloseButton className='modal-close-button'/>
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