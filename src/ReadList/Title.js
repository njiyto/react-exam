import React from 'react';

function Title({ name }) {
  if (!name) {
    return null;
  }
  
  return (
    <div className="list-books-title">
      <h1>{name}</h1>
    </div>
  )
}

export default React.memo(Title);