
import React, { useState, useEffect } from 'react';

const BookForm = ({ isEdit, currentBook, onSubmit, resetForm }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        if (isEdit && currentBook) {
            setTitle(currentBook.title);
            setAuthor(currentBook.author);
        } else {
            setTitle('');
            setAuthor('');
        }
    }, [isEdit, currentBook]); // Include dependencies here

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, author });
        resetForm(); // Reset the form after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isEdit ? 'Edit Book' : 'Add Book'}</h2>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Author:
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">{isEdit ? 'Update Book' : 'Add Book'}</button>
        </form>
    );
};

export default BookForm;