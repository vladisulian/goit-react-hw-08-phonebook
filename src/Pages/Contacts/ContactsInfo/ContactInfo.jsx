import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { fetchContactInfoAPI } from 'redux/operations';
import { selectContactInfo } from 'redux/selectors';
import { Link } from 'react-router-dom';
//
import './ContactInfo.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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

  const { name, surname, image, phone, createdAt, id, job } = contactInfo;
  return (
    <>
      {contactInfo.length !== 0 && (
        <div className="contact-info">
          <Link to={backLink} className="info__backlink">
            <AiOutlineCloseCircle />
          </Link>
          <div className="info">
            <p>
              {name} {surname}
            </p>
            <img src={image} alt="contact avatar" />
            <p className="job">{job}</p>
            <p className="phone">
              <BsFillTelephoneFill /> {phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
