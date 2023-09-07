const books = require('../data/books')


const longestNamedBook = (books) => {
        return books.reduce((acc, curr) => {
            if (acc.name.length > curr.name.length) {
                return acc
            } else {
                return curr
            }
        },books[0])
  }

  console.log(longestNamedBook(books));