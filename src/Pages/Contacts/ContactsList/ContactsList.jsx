import './ContactsList.css';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import incognito from '../../../images/incognito.png';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContactsAPI } from 'redux/operations';
import { Link, useLocation } from 'react-router-dom';
// import { resetContactInfo } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const contacts = useSelector(selectContacts);
  //* update contacts
  useEffect(() => {
    dispatch(fetchContactsAPI()); //* dispatch in hook dependency will update contacts-list.
  }, [dispatch]);

  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className="Contacts-list">
        {filteredContacts.map(({ id, name, number, surname, image }) => {
          return (
            <li key={id}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
              >
                {image ? (
                  <Image
                    className={'Contact-avatar'}
                    objectFit="cover"
                    w={'100px !important'}
                    h={'100px !important'}
                    borderRadius={50}
                    maxW={{ base: '100%', sm: '200px' }}
                    src={image}
                    alt={`${id} avatar`}
                  />
                ) : (
                  <Image
                    className={'Contact-avatar'}
                    src={incognito}
                    alt={`${id} avatar`}
                    objectFit="cover"
                    w={'100px !important'}
                    h={'100px !important'}
                    borderRadius={50}
                    maxW={{ base: '100%', sm: '200px' }}
                  />
                )}
                <Divider className="divider-vertical " orientation="vertical" />

                <Stack>
                  <CardBody>
                    <Heading size="md" style={{ textAlign: 'start' }}>
                      {name} {surname} <br /> <span>({number})</span>
                    </Heading>
                    <Divider className="divider" />
                  </CardBody>

                  <CardFooter>
                    <Link to={`${id}`} state={{ from: location }}>
                      <Button variant="solid" colorScheme="blue">
                        Info
                      </Button>
                    </Link>
                  </CardFooter>
                </Stack>
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
