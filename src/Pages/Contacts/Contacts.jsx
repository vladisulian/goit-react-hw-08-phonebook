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

{
  /* <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>
        <Form />
        <FilterBar />
        <ContactsList />
        )}
      </div> */
}
