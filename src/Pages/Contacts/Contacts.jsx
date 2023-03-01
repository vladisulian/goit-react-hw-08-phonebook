import styled from 'styled-components';
import { VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/react';
const { ContactsList } = require('./ContactsList/ContactsList');
const { FilterBar } = require('./Filter/Filter');
const { AddContactForm } = require('./Form/Form');

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;

position: relative
}`;
const Contacts = () => {
  return (
    <Main>
      <ContactsList />
    </Main>
  );
};

export default Contacts;

{
  /* <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>
        <Form />
        <FilterBar />
        <ContactsList />
        )}
      </div> */
}
