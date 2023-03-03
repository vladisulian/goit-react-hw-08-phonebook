import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetContactInfo } from 'redux/contactsSlice';
import styled from 'styled-components';
const { ContactsList } = require('./ContactsList/ContactsList');

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
