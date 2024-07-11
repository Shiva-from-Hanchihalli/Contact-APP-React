import React, { useState } from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import './index.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
