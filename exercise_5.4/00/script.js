const books = require('../data/books')

const fantasyOrScienceFiction = (books) => {
    const filteredInfo = books.filter((book) => {
    return book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
  });
  return filteredInfo
};
  console.log(fantasyOrScienceFiction(books));
