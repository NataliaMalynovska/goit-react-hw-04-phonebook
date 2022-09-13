import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHendler = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const newName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newName) {
      return alert(`Sorry, ${name} is already in your contacts`);
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
    }
  };

  const handleFilterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  const deleteContact = contactId => {
    setContacts(prevСontacts => [
      prevСontacts.filter(contact => contact.id !== contactId),
    ]);
  };

  return (
    <Box
      as="main"
      backgroundColor="#acb0be"
      m="16px"
      p="16px"
      width="560px"
      mr="auto"
      ml="auto"
    >
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHendler} />
        <Section title="Contacts">
          <Filter filter={filter} handleFilterContacts={handleFilterContacts} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </Section>
      </Section>
    </Box>
  );
};

export default App;
