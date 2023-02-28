import './ContactsList.css';
import PropTypes from 'prop-types';
//? redux
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContactAPI, fetchContactsAPI } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // update contacts
  useEffect(() => {
    dispatch(fetchContactsAPI());
    // dispatch in hook dependency will update contacts-list
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContactAPI(id));
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const onDeleteClick = () => {
  //   handleDelete(id);

  // }

  return (
    <div className="Contacts-list-container">
      <h1>Contacts</h1>

      <ul className="Contacts-list">
        {filteredContacts.map(({ name, id, phone, surname }) => {
          return (
            <li key={id}>
              <div className="contacts__name">
                <p>{name}</p>
                {surname && <p>{surname}</p>}
              </div>

              <div className="contacts__number">
                <p>{phone}</p>
              </div>
              <button
                type="button"
                className="Contacts__delete-button"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
