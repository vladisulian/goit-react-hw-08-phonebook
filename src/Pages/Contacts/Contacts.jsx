const { ContactsList } = require('./ContactsList/ContactsList');
const { FilterBar } = require('./Filter/Filter');
const { Form } = require('./Form/Form');

const Contacts = () => {
  return (
    <>
      <Form />
      <FilterBar />
      <ContactsList />
    </>
  );
};

export default Contacts;

 {/* <div className="Phonebook-container">
        <h1 className="Phonebook__title">Phonebook</h1>
        <Form />
        <FilterBar />
        <ContactsList />
        )}
      </div> */}
      
   