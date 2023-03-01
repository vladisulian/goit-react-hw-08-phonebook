import { FilterBar } from 'Pages/Filter/Filter';
import { AddContactForm } from 'Pages/AddContactForm/AddContactForm';

const ContactsHeader = () => {
  return (
    <>
      <AddContactForm />
      <FilterBar />
    </>
  );
};
export default ContactsHeader;
