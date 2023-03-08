import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { deleteContactAPI, fetchContactsAPI } from 'redux/operations';
import { Link } from 'react-router-dom';
//
import './ContactInfo.scss';
import incognito from '../../../images/incognito.png';
import { BsFillTelephoneFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { MdWork, MdLocationCity } from 'react-icons/md';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { RiMessage2Fill } from 'react-icons/ri';
import { Button, Divider, Image } from '@chakra-ui/react';

const ContactInfo = () => {
  const dispatch = useDispatch();
  const { contactID } = useParams(); // * contactID is an object type !
  const location = useLocation();
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({});

  const handleDelete = id => dispatch(deleteContactAPI(id));

  const backLink =
    location.state?.from ?? '/goit-react-hw-08-phonebook/contacts';

  useEffect(() => {
    dispatch(fetchContactsAPI()).then(data =>
      // console.log(data.payload.filter(contact => contact.id === contactID)[0])
      setContactInfo(
        data.payload.filter(contact => contact.id === contactID)[0]
      )
    );
  }, [dispatch, contactID]);

  const { id, name, image, number, country, city, job } = contactInfo;
  return (
    <>
      {contactInfo.hasOwnProperty('id') && (
        <div className="contact-info">
          <Link to={backLink} className="info__backlink">
            <FiArrowLeftCircle />
          </Link>
          <div className="info">
            {image ? (
              <Image src={image} alt="contact avatar" />
            ) : (
              <Image
                className={'Contact-avatar'}
                src={incognito}
                alt={`${id} avatar`}
              />
            )}

            <p className='name'>{name}</p>

            <Divider className="divider" />

            <div className="actions">
              <Button>
                <BsFillTelephoneFill className="actions__call" />
                <p>Call</p>
              </Button>
              <Button>
                <RiMessage2Fill className="actions__text" />
                Text
              </Button>
              <Button>
                <BsFillCameraVideoFill className="actions__video" />
                Video
              </Button>
            </div>
            <Divider className="divider" />

            <div className="about">
              <ul>
                <li>
                  <BsFillTelephoneFill className="phone-icon" /> Number:
                  <span>{number ? number : 'without number'}</span>
                </li>
                <li>
                  <MdWork className="job-icon" />
                  Job role: <span>{job ? job : 'Incredibly talented programmer'}</span>
                </li>
                <li>
                  <GrMapLocation className="country-icon" /> Country:
                  <span>{country ? country : ' uknown'}</span>
                </li>
                <li>
                  <MdLocationCity className="city-icon" /> City:
                  <span>{city ? city : 'uknown'}</span>
                </li>
              </ul>
            </div>
            <Button
              colorScheme={'red'}
              style={{ width: 165, height: 40 }}
              onClick={() => {
                handleDelete(id);
                navigate('/goit-react-hw-08-phonebook/contacts');
              }}
            >
              Delete contact
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
