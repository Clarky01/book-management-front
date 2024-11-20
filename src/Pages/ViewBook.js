
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewBooks = ({ books }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>View Books</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Published Year: {book.published_year}</p>
                        <p>Genre: {book.genre}</p>
                        <p>Description: {book.description}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate(-1)}>Back</button> {/* Back button */}
        </div>
    );
};

export default ViewBooks;