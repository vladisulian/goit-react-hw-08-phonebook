// chakra
import { Spinner } from '@chakra-ui/react';
import './ChakraUI/spinner.css';
import React, { useEffect } from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(getLoadingStatus);
  useEffect(() => console.log('isLoading is =>', isLoading), [isLoading]);
  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>
      <Form />
      <FilterBar />
      <ContactsList />
      {isLoading && (
        <Spinner
          color="orange"
          size={'xl'}
          emptyColor="orangered"
          speed="900ms"
        />
      )}
    </div>
  );
};
