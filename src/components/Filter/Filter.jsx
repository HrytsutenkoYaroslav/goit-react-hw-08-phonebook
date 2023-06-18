import React from "react";
import { useSelector, useDispatch } from "react-redux";
import  setFilter  from "../Filter/Filter";
import css from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Filter contacts by name:
        <input
          className={css.input}
          type="text"
          value={filterValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
