// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import { addContact, deleteContact, changeFilter } from './contacts-actions';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const items = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => {
    const isExistContact = state.find(
      ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (isExistContact) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
//
// export const items = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD: {
//       const isExistContact = state.find(
//         ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
//       );
//       if (isExistContact) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       }
//       return [...state, payload];
//     }
//     case types.DELETE: {
//       return state.filter(({ id }) => id !== payload);
//     }
//     default:
//       return state;
//   }
// };

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// export const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({ items, filter });
