import React from 'react'

export default function Authors({ data }) {
  if (!data.length) {
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
