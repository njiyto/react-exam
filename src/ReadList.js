import React, { Component } from 'react';
import Title from './Title';
import SearchButton from './SearchButton';
import Shelf from './Shelf';

export default class ReadList extends Component {
  render() {
    const { list, listLoading } = this.props;

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
              {list && (
                Object.keys(list).map((shelf) => (
                  <Shelf key={shelf} name={shelf} list={list[shelf]} />
              )))}
            </div>
          </div>
          <SearchButton />
        </div>
      </div>
    )
  }
}
