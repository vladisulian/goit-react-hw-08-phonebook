import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { fetchContactInfoAPI } from 'redux/operations';
import { selectContactInfo } from 'redux/selectors';
import { Link } from 'react-router-dom';
//
import './ContactInfo.css';
import { BsFillTelephoneFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';
import { MdWork, MdLocationCity } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiMessage2Fill } from 'react-icons/ri';
import { Button, Divider } from '@chakra-ui/react';

const ContactInfo = () => {
  const dispatch = useDispatch();
  const { contactID } = useParams(); // * contactID is an object type !
  const contactInfo = useSelector(selectContactInfo);
  const location = useLocation();

  const backLink =
    location.state?.from ?? '/goit-react-hw-08-phonebook/contacts';

  useEffect(() => {
    dispatch(fetchContactInfoAPI(contactID));
  }, [dispatch, contactID]);

  const { name, surname, image, phone, country, city, job } = contactInfo;
  return (
    <>
      <div className="contact-info">
        <Link to={backLink} className="info__backlink">
          <AiOutlineCloseCircle />
        </Link>
        <div className="info">
          <img src={image} alt="contact avatar" />
          <p>
            {name} {surname}
          </p>

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
                <MdWork className="job-icon" />
                Job role: <span>{job}</span>
              </li>
              <li>
                <BsFillTelephoneFill className="phone-icon" /> Number:
                <span>{phone}</span>
              </li>
              <li>
                <GrMapLocation className="country-icon" /> Country:
                <span>{country}</span>
              </li>
              <li>
                <MdLocationCity className="city-icon" /> City:
                <span>{city}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
