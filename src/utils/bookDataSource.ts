import { IBook } from '../graphql/models/books/Book';

let books: IBook[] = [
  {
    _id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    _id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const getAllBooks = async (): Promise<IBook[]> => {
  return books;
};

const getBookById = async (bookId: String): Promise<IBook | void> => {
  return books.find((book) => book._id === bookId);
};

const addBook = async (newBook: IBook): Promise<void> => {
  books.push(newBook);
};

const deleteBookById = async (bookId: String): Promise<void> => {
  books = books.filter((book: IBook) => book._id !== bookId);
};

const updateBookById = async (updatedBook: IBook): Promise<void> => {
  let book = books.find((book: IBook) => updatedBook._id === book._id);
  Object.assign(book, updatedBook);
};

export { getAllBooks, getBookById, addBook, deleteBookById, updateBookById };
