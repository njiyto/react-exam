import React, { useState, useContext, useEffect} from 'react';
import * as BooksAPI from './BooksAPI';
import { Context } from './helper.js';

function SelectField({ shelf, book }) {
  const [value, setValue] = useState('currentlyReading');
  const getList = useContext(Context);

  useEffect(() => {
    if (shelf !== value) {
      setValue(shelf);
    }
  }, [shelf]);

  if (!shelf) {
    return null;
  }

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
    BooksAPI.update(book, val).then(() => {
      getList();
    })
  };

  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={onChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
      </div>
  )
}

export default React.memo(SelectField);