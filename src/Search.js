import React, { Component } from 'react';
import ButtonBack from './ButtonBack';
import SearchField from './SearchField';
import * as BooksAPI from './BooksAPI';
import BooksList from './BooksList';

export default class Search extends Component {
  state = {
    list: null
  }

  onChange = (query) => {
    BooksAPI.search(query).then((list) => {
      this.setState({ list })
    })
  }

  render() {
    const { list } = this.state;
     console.log('list', list)
    return (
      <>
        <div className="search-books">
          <div className="search-books-bar">
            <ButtonBack />
            <SearchField onChange={this.onChange} />
          </div>
        </div>
        {!!list && (
          <BooksList list={list} chosenList={this.props.chosenList} />
        )}
     </>
    )
  }
}
