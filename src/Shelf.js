import React from 'react';
import Book from './Book';

function Shelf({ name, list }) {
  if (!name || !list?.length) {
    return null;
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {list.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default React.memo(Shelf);