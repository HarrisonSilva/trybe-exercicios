const books = require('../data/books')

const oldBooksOrdered = (books) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
        const filteredBooks = books.filter((book) => currentYear - book.releaseYear > 60)
         return filteredBooks.sort((a, b) => a.releaseYear - b.releaseYear)
  }

console.log(oldBooksOrdered(books));
