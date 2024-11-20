
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = ({ addBook }) => {
    const navigate = useNavigate();

    const handleAddBook = (event) => {
        event.preventDefault();
        const book = {
            title: event.target.title.value,
            author: event.target.author.value,
            published_year: event.target.published_year.value,
            genre: event.target.genre.value,
            description: event.target.description.value,
        };
        addBook(book);
        // Navigate to the view page after adding the book
        navigate('/view');
    };

    return (
        <div>
            <h1>Add Book</h1>
            <form onSubmit={handleAddBook}>
                <textarea type="text" name="title" placeholder="Title" required /> {/* Corrected to input */}
                <textarea type="text" name="author" placeholder="Author" required /> {/* Author input */}
                <textarea type="number" name="published_year" placeholder="Published Year" required />
                <textarea type="text" name="genre" placeholder="Genre" required />
                <textarea name="description" placeholder="Description" required></textarea>
                <button type="submit">Add Book</button>
            </form>
            <button onClick={() => navigate(-1)}>Back</button> {/* Back button */}
        </div>
    );
};

export default AddBook;