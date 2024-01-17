import { useState } from 'react';
import contactsArr from 'data/contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import useLocalStorage from 'hooks/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', contactsArr);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
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
      <ContactForm onAddContact={addContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} filter={filter} />
      <ContactList
        contacts={filteredСontacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
