const books = require('../data/books')

const oldBooks = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const filteredBooks = books.filter((book) => currentYear - book.releaseYear > 60)
    return filteredBooks.map((book) => book.name)
  }
  console.log(oldBooks());