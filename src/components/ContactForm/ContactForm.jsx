import { useState } from 'react';
import { nanoid } from 'nanoid';
import { formatName, formatNumber } from 'helpers';
import { Form, Label, Input, Button } from './ContactFormStyled';

const ContactForm = ({ contacts, onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(4),
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

    onAddContact(newContact);

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
