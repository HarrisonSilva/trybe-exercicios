const books = require('../data/books')

const oldBooksOrdered = (books) => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
        const filteredBooks = books.filter((book) => anoAtual - book.releaseYear > 60)
         return filteredBooks.sort((a, b) => a.releaseYear - b.releaseYear)
  }

console.log(oldBooksOrdered(books));
