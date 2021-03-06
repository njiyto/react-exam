import React from 'react';
import SelectField from './SelectField';
import Authors from './Authors';

function Book({ book }) {
  if (!book) {
    return null;
  }

  const img = book.imageLinks?.smallThumbnail
    ? `url(${book.imageLinks.smallThumbnail})`
    : 'none';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: img }}
          />
          <SelectField shelf={book.shelf} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <Authors data={book.authors} />
      </div>
    </li>
  )
}

export default React.memo(Book);