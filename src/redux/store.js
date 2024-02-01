import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactsArr from 'data/contacts';
import { ADD_CONTACT, DELETE_CONTACT } from './constants';

const initialState = {
  contacts: contactsArr,
  filter: '',
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const { contacts } = state;
      return {
        contacts: [...contacts, payload],
      };
    case DELETE_CONTACT:
      const newContacts = state.contacts.filter(
        contact => contact.id !== payload
      );
      return {
        contacts: newContacts,
      };
    default:
      return state;
  }
};
// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';

// const store = configureStore({
//   reducer: rootReducer,
// });
