import React, { useState, useContext, useEffect} from 'react';
import * as BooksAPI from '../BooksAPI';
import { Context } from '../helper.js';

function SelectField({ shelf, book }) {
  const [value, setValue] = useState('move');
  const callback = useContext(Context);

  useEffect(() => {
    if (shelf && shelf !== value) {
      setValue(shelf);
    }
  }, [shelf, value]);

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
    BooksAPI.update(book, val).then(() => {
      callback();
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