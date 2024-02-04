import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsArr from 'data/contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsArr,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(4),
            ...data,
          },
        };
      },
    },

    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
