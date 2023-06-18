import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import css from '../ContactsList/ContactsList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  if (!contacts.length) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button className={css.button} onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
