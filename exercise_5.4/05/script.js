const books = require('../data/books')


const authorWith3DotsOnName = (nameBook) => {
        return books.find((book) => {
          const bookName = book.name.replace(/\s+/g, ''); // Remove todos os espaços em branco
          const initials = bookName.slice(0, 3).toUpperCase(); // Pega as três primeiras letras e as torna maiúsculas
          return initials === nameBook.slice(0, 3).toUpperCase(); // Compara as iniciais
        });
      };
  
console.log(authorWith3DotsOnName('ose'));
