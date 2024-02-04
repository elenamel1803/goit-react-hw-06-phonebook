import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import { getFilter } from '../../redux/filter/filterSelectors';
import { List } from './ContactListStyled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredСontacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {filteredСontacts().map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
