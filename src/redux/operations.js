import { URL } from 'API/FetchAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { toastSuccess } from 'components/ReactToastify/toasts';

export const fetchContactsAPI = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await axios.get(URL).catch(error => console.error(error));
    // console.log('response.data from fetch(operations)', response.data);

    return response.data;
  }
);

export const addContactAPI = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios
      .post(URL, contact)
      .catch(error => console.error(error));
    response.status === 201
      ? toast.success('Contact added! ', toastSuccess)
      : toast.error('Something went wrong :(', toastSuccess);
    // console.log('response.data from addContact(operations)', response.data);
    return response.data;
  }
);

export const fetchContactInfoAPI = createAsyncThunk(
  'contact/info',
  async contactID => {
    const response = await axios
      .get(`${URL}/${contactID}`)
      .catch(error => console.error(error));

    console.log('response.data from operations.js', response.data);
    return response.data;
  }
);

export const deleteContactAPI = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios
      .delete(`${URL}/${contactId}`)
      .catch(error => console.error(error));
    // console.log('Contact deleted. ID is =>', contactId);

    return contactId;
  }
);
