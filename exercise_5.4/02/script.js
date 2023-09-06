const books = require('../data/books')

const booksByAuthorBirthYear = (birthYear) => {
    const filteredBooks = books.filter((book) => book.author.birthYear === birthYear)
    return filteredBooks.map((book) => book.name)

  }

  console.log(booksByAuthorBirthYear(1920));
