import React from 'react';

export default function SearchForm({ setSearch }) {
  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const { value } = form.elements.search;

    if (value.trim() === '') return;

    setSearch(value);
    form.reset();
  }
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input name="search" type="text" />
      </label>
    </form>
  );
}