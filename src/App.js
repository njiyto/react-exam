import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ReadList from './ReadList';
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import { getSortedList, Context } from './helper.js';

import './App.css';

export default class App extends Component {
  state = {
    list: null,
    chosenList: null,
    listLoading: true
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    this.setState({ listLoading: true });
    BooksAPI.getAll().then((list) => {
      const sortedList = getSortedList(list);
      const chosenList = list.map(el => ({ id: el.id, shelf: el.shelf }))
      this.setState({ list: sortedList, chosenList, listLoading: false });
    })
  };

  render() {
    const { list, listLoading, chosenList } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Context.Provider value={this.getList}>
            <ReadList list={list} listLoading={listLoading} />
          </Context.Provider>
        )} />
        <Route path="/search" render={() => (
          <Context.Provider value={this.getList}>
            <Search chosenList={chosenList} />
          </Context.Provider>
        )} />
      </div>
    )
  }
}
