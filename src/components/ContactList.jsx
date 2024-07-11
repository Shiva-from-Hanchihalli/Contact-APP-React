import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="contact-list">
      <h3>Contact List</h3>
      {contacts.map((contact) => (
        <div className="item" key={contact.id}>
          <div className="content">
            <div className="header">{contact.name}</div>
            <div>{contact.email}</div>
          </div>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="icon"
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
