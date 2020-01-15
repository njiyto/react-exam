import React, { useState } from 'react';

function SearchField({ onChange }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val.trim());
  }

  return (
    <div className="search-books-input-wrapper">
      <input
        value={query}
        onChange={handleChange}
        type="text"
        placeholder="Search by title or author"
      />
    </div>
  )
}

export default SearchField
