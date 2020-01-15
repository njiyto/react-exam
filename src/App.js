import React from 'react';
import { Route } from "react-router-dom";
import ReadList from './ReadList';
import Search from './Search';

import './App.css';

export default function BooksApp() {
  return (
    <div className="app">
      <Route exact path="/" component={ReadList} />
      <Route path="/search" component={Search} />
    </div>
  )
}
