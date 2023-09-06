const books = require('../data/books')


const fantasyOrScienceFictionAuthors = () => {
    const filteredBooks = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    const authors = filteredBooks.map((book) => book.author.name).sort()
    return authors
  }
  console.log(fantasyOrScienceFictionAuthors());
