import PropTypes from 'prop-types';
import { Box } from '../Box';
import { ContactItem, ContactData, ButtonDelete } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box
      p="16px"
      border="2px solid Lavender"
      borderRadius="10px"
      boxShadow="inset 15px 0 15px  -15px #000 , inset -15px 0 15px  -15px #000"
    >
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactData>
              {name}: {number}
            </ContactData>
            <ButtonDelete onClick={() => onDeleteContact(id)}>
              Delete
            </ButtonDelete>
          </ContactItem>
        ))}
      </ul>
    </Box>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
