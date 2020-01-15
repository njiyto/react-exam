import React from 'react';
import { Link } from "react-router-dom";

function SearchButton() {
  return (
    <Link className="open-search" to="/search">
      <button>Add a book</button>
    </Link>
  )
}

export default React.memo(SearchButton);