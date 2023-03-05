import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { toastError, toastSuccess } from 'components/ReactToastify/toasts';

export const fetchContactsAPI = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await axios
      .get('/contacts')
      .catch(error => console.error(error));
    console.log(response.data)
    return response.data;
  }
);

export const addContactAPI = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios
      .post('/contacts', contact)
      .catch(error => console.error(error));
    response.status === 201
      ? toast.success('Contact added! ', toastSuccess)
      : toast.error('Something went wrong :(', toastError);
    return response.data;
  }
);

export const fetchContactInfoAPI = createAsyncThunk(
  'contact/info',
  async contactID => {
    const response = await axios
      .get(`contacts/${contactID}`)
      .catch(error => console.error(error));

    return response.data;
  }
);

export const deleteContactAPI = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/${contactId}`).catch(error => console.error(error));
    toast.success('Contact deleted! ', toastSuccess);
    return contactId;
  }
);
