
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const books = [
        { id: 1, title: 'Book One' },
        { id: 2, title: 'Book Two' },
    ];

    return (
        <div>
            <h1>Welcome to the Book Management App</h1>
            <div>
                <Link to="/add" className="btn btn-primary">Add Book</Link>
            </div>
            <div>
                <Link to="/view" className="btn btn-secondary">View Books</Link>
            </div>
            <h2>Available Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} 
                        <Link to={`/edit/${book.id}`} className="btn btn-warning mx-2">Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;