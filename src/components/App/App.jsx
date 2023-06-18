import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
  setFilter,
  selectCurrentUser,
  setCurrentUser,
} from '../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import css from './App.module.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const checkAuthorizationStatus = async () => {
    try {
      const response = await axios.get('/users/current');
      const currentUser = response.data;
      dispatch(setCurrentUser(currentUser));

      const contactsResponse = await axios.get('/contacts');
      const contacts = contactsResponse.data;
      dispatch(fetchContacts(contacts));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkAuthorizationStatus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddContact = async (name, number) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      const newContact = response.data;
      dispatch(addContact(newContact));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteContact = async (contactId) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      dispatch(deleteContact(contactId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateContact = async (contactId, updatedData) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, updatedData);
      const updatedContact = response.data;
      dispatch(updateContact({ contactId, updatedContact }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
  };

  return (
    <div className={css.app}>
      <h1>Телефонная книга</h1>
      <BrowserRouter>
        <nav>
          <ul>
            {currentUser ? (
              <>
                <li>
                  <Link to="/contacts">Контакты</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Выйти
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Регистрация</Link>
                </li>
                <li>
                  <Link to="/login">Войти</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/contacts"
            element={
              currentUser ? (
                <>
                  <ContactForm onSubmit={handleAddContact} />
                  <Filter onFilterChange={(filter) => dispatch(setFilter(filter))} />
                  <ContactList
                    onDeleteContact={handleDeleteContact}
                    onUpdateContact={handleUpdateContact}
                  />
                </>
              ) : (
                <LoginPage />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
