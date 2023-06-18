import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register" activeClassName="active">
            Реєстрація
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Вхід
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName="active">
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
