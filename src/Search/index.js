import React, { Component } from 'react';
import Button from '../components/Button';
import SearchField from './SearchField';
import * as BooksAPI from '../BooksAPI';
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
    const { chosenList } = this.props;

    return (
      <>
        <div className="search-books">
          <div className="search-books-bar">
            <Button className="close-search" link="/">
              Close
            </Button>
            <SearchField onChange={this.onChange} />
          </div>
        </div>
        {!!list && (
          <BooksList list={list} chosenList={chosenList} />
        )}
     </>
    )
  }
}
