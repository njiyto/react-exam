import React from 'react';

function Authors({ data }) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="book-authors">
      {data.map((author) => (
        <div key={author}>{author}</div>
      ))}
    </div>
  )
}

export default React.memo(Authors);