import { useState } from 'react';
// import contactsArr from 'data/contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import useLocalStorage from 'hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/actions';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', contactsArr);

  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  // const addContact = newContact => {
  //   setContacts(prevState => [...prevState, newContact]);
  // };

  const onAddContact = data => {
    const action = addContact(data);
    dispatch(action);
  };

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const filteredСontacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} filter={filter} />
      <ContactList
        contacts={filteredСontacts()}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

export default App;
