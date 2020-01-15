import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Title from './Title';
import SearchButton from './SearchButton';
import Shelf from './Shelf';
import { getSortedList, Context } from './helper.js';

export default class ReadList extends Component {
  state = {
    list: null,
    listLoading: true
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    this.setState({ listLoading: true });
    BooksAPI.getAll().then((list) => {
      const sortedList = getSortedList(list);
      this.setState({ list: sortedList, listLoading: false });
    })
  };

  render() {
    const { list, listLoading } = this.state;

    return (
      <div className="list-books">
        <Title name="MyReads" />
        <div className="list-books">
          <div className="list-books-content">
            <div>
              {!list && listLoading && (
                <div> loading... </div>
              )}
              {!list && !listLoading && (
                <div> empty </div>
              )}
              <Context.Provider value={this.getList}>
                {list && (
                  Object.keys(list).map((shelf) => (
                    <Shelf key={shelf} name={shelf} list={list[shelf]} />
                )))}
               </Context.Provider>
            </div>
          </div>
          <SearchButton />
        </div>
      </div>
    )
  }
}
