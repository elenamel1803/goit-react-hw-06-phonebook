import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;

export default rootReducer;
