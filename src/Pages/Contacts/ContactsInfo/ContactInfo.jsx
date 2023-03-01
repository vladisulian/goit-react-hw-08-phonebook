import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchContactInfoAPI } from 'redux/operations';
import { selectContactInfo } from 'redux/selectors';
import './ContactInfo.css';
const ContactInfo = () => {
  const dispatch = useDispatch();
  // contactID is an object type !
  const { contactID } = useParams();
  const contactInfo = useSelector(selectContactInfo);

  useEffect(() => {
    dispatch(fetchContactInfoAPI(contactID));
  }, [dispatch, contactID]);

  return (
    <div className="contact-info">
      <img src={contactInfo.image} alt="contact avatar" />
    </div>
  );
};

export default ContactInfo;
