import './ContactsList.css';
import PropTypes from 'prop-types';
import Pagination from 'react-paginate';
//? redux
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContactAPI, fetchContactsAPI } from 'redux/operations';
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
import { Link, useLocation } from 'react-router-dom';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const contacts = useSelector(selectContacts);

  // update contacts
  useEffect(() => {
    dispatch(fetchContactsAPI());
    // dispatch in hook dependency will update contacts-list
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContactAPI(id));
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className="Contacts-list">
        {filteredContacts.map(({ id, name, phone, surname, image }) => {
          // console.log('filteredContacts', filteredContacts);
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
                  ''
                )}
                <Divider className="divider-vertical " orientation="vertical" />

                <Stack>
                  <CardBody>
                    <Heading size="md" style={{ textAlign: 'start' }}>
                      {name} {surname}
                    </Heading>
                    <Divider className="divider" />
                    <Text py="2">{phone}</Text>
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
          // return (
          //   <li key={id}>
          //     <div className="contacts__name">
          //       <p>{name}</p>
          //       {surname && <p>{surname}</p>}
          //     </div>

          //     <div className="contacts__number">
          //       <p>{phone}</p>
          //     </div>
          //     <button
          //       type="button"
          //       className="Contacts__delete-button"
          //       onClick={() => {
          //         handleDelete(id);
          //       }}
          //     >
          //       Delete contact
          //     </button>
          //   </li>
          // );
        })}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
