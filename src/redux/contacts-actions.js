import shortid from 'shortid';
// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid(),
    name,
    number,
  },
}));

// export const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid(),
//     name,
//     number,
//   },
// });

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');

// export const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
