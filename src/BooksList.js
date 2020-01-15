import React from 'react';
import Book from './Book';

export default function BooksList({ list, chosenList }) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {!!list?.length && list.map((book) => {
          console.log('chosenList', chosenList, book.id);
          const chosen = chosenList.find(el => el.id === book.id)
          if (chosen) {
            book.shelf = chosen.shelf;
          }
          return <Book key={book.id} book={book} />
        })}
        {list?.error && (
          <div>{list.error}</div>
        )}
      </ol>
    </div>
  )
}
