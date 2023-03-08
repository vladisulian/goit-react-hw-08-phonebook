import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsAPI,
  addContactAPI,
  deleteContactAPI,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // resetContactInfo(state) {
    //   state.contactInfo = {};
    //   // console.log(state.contactInfo);
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAPI.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(addContactAPI.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactAPI.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContactAPI.rejected, state => {
        state.isLoading = false;
      })

      .addCase(deleteContactAPI.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContactAPI.rejected, state => {
        state.isLoading = false;
      });
  },
});

// export const { resetContactInfo } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
