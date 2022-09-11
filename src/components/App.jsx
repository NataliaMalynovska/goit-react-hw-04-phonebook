import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  formSubmitHendler = ({ name, number }, { resetForm }) => {
    const newContact = { id: nanoid(), name, number };
    const newName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newName) {
      return alert(`Sorry, ${name} is already in your contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
    resetForm();
  };
  resetForm = e => {
    this.setState({ name: '', number: '' });
  };

  handleFilterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const { formSubmitHendler, handleFilterContacts, deleteContact } = this;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box as="main" backgroundColor="#aeb2c2" m="16px" p="16px" width="560px" mr="auto" ml="auto">
        <GlobalStyle />
        <Section title="Phonebook">
          <ContactForm onSubmit={formSubmitHendler} />
          <Section title="Contacts">
            <Filter
              filter={filter}
              handleFilterContacts={handleFilterContacts}
            />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={deleteContact}
            />
          </Section>
        </Section>
      </Box>
    );
  }
}
export default App;
