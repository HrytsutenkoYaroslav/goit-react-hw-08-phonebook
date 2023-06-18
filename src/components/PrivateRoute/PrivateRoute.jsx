import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/contactsSlice';

const PrivateRoute = ({ element, ...rest }) => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
