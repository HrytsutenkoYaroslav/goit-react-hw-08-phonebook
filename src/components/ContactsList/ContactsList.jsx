import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/contactsSlice';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (<ul className={css.list}>
    {filteredContacts.map((contact) => (
      <li className={css.item} key={contact.id}>
        <p className={css.text}>
          {contact.name} : {contact.number}
        </p>
        <button
          className={css.button}
          type="button"
          onClick={() => handleDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
};

export default ContactsList;


