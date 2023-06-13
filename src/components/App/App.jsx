import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, addContact } from '../redux/contactsSlice'; 
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Телефонная книга</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2 className={css.title}>Контакты</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
