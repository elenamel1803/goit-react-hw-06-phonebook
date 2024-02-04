import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import { Item, Button, Text } from './ContactListStyled';

const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Text id={id}>
        {name}: {number}
      </Text>
      <Button onClick={onDeleteContact}>Delete</Button>
    </Item>
  );
};

export default ContactListItem;
