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
    return response.data;
  }
);

export const addContactAPI = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post('/contacts', contact);
      toast.success('Contact added! ', toastSuccess);
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong :(', toastError);
    }
  }
);

export const deleteContactAPI = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`).catch(error => console.error(error));
    toast.success('Contact deleted! ', toastSuccess);
    return contactId;
  }
);
