

import { Style } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  arrContacts: [],
  currentContact: null,

}
const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const exist = state.arrContacts.find(contact => contact.id === action.payload.id);
      if (!exist) {
        state.arrContacts.push(action.payload);

      }
    },
    updateContact: (state, action) => {
      const index = state.arrContacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.arrContacts[index] = { ...state.arrContacts[index], ...action.payload };
      }
    },
    pushDataToArrContacts: (state, action) => {
      state.arrContacts = action.payload;
    },
    toggleStar: (state, action) => {
      const index = state.arrContacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.arrContacts[index].isStarred = !state.arrContacts[index].isStarred;

      }

    }
  }
});

export const { addContact, updateContact, pushDataToArrContacts, toggleStar } = contactSlice.actions;
export default contactSlice.reducer;
