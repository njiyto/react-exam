import React from 'react';

export function getSortedList(list) {
  if (!list?.length) return null;
  let SortedList = {};
  for (const book of list) {
    if (SortedList[book.shelf]) {
      SortedList[book.shelf].push(book)
    } else {
      SortedList[book.shelf] = [book]
    }
  }
  if (!Object.keys(SortedList)?.length) return null;
  return SortedList;
}

export const Context = React.createContext();