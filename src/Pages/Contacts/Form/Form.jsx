import { Button } from '@chakra-ui/react';
import './Form.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAPI } from 'redux/operations';
import { getLoadingStatus } from 'redux/selectors';

export const Form = () => {
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
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

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const contact = { name, phone };

    dispatch(addContactAPI(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form
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

        {/* <button type="submit" className="Phonebook__form-submit-button">
          Add contact
        </button> */}
      </form>
    </>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSubmit: PropTypes.func,
};
