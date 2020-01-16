import React from 'react';
import Title from './Title';
import Shelf from './Shelf';
import Button from '../components/Button';

function ReadList({ list, listLoading }) {
  return (
    <div className="list-books">
      <Title name="MyReads" />
      <div className="list-books">
        <div className="list-books-content">
          <div>
            {!list && listLoading && (
              <div>loading...</div>
            )}
            {!list && !listLoading && (
              <div>empty</div>
            )}
            {list && (
              Object.keys(list).map((shelf) => (
                <Shelf key={shelf} name={shelf} list={list[shelf]} />
            )))}
          </div>
        </div>
        <Button className="open-search" link="/search">
          Add a book
        </Button>
      </div>
    </div>
  )
}

export default React.memo(ReadList);