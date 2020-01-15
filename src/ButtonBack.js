import React from 'react';
import { Link } from "react-router-dom";

function ButtonBack() {
  return (
    <Link className="close-search" to="/">
      Close
    </Link>
  )
}

export default React.memo(ButtonBack);
