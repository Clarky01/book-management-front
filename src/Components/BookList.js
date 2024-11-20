import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/books/${id}`, {
        method: 'DELETE',
      });
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  

  return (
    <div>
      <h2>Book List</h2>
      <Link to="/add">Add New Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            <Link to={`/view/${book.id}`}>View</Link>
            <Link to={`/edit/${book.id}`}>Edit</Link>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
