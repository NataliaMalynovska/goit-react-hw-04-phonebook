import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ filter, handleFilterContacts }) => (
  <Box p="8px 16px">
    <Label>
      Find contact by name
      <Input
        type="text"
        value={filter}
        onChange={handleFilterContacts}
        placeholder="Search..."
      />
    </Label>
  </Box>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterContacts: PropTypes.func.isRequired,
};
export default Filter;
