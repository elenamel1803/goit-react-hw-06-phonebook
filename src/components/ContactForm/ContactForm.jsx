import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatName, formatNumber } from 'helpers';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import { addContact } from '../../redux/contacts/contactsSlice';
import { Form, Label, Input, Button } from './ContactFormStyled';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      name: formatName(name.trim()),
      number: formatNumber(number.trim()),
    };

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${formatName(name)} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </div>
      <div>
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </div>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
