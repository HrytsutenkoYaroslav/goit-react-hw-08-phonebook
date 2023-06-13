import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter) || '';
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={css.filter__wrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={String(filter)}
          onChange={handleFilterChange}
          required
        />
      </label>
    </div>
  );
};

export default Filter;
