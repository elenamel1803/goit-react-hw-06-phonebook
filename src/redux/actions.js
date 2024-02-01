import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT } from './constants';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(4),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};