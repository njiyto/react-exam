import React from 'react';
import { Link } from "react-router-dom";

function ButtonBack({ className, link, children }) {
  return (
    <Link className={className} to={link}>
      <button>{children}</button>
    </Link>
  )
}

export default React.memo(ButtonBack);
