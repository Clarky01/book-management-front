
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BookDetail = () => {
    const location = useLocation();
    const { title, author } = location.state || { title: '', author: '' };

    useEffect(() => {
        const fetchBookDetails = async () => {
            // Simulate fetching book details
            console.log(`Fetching details for ${title}`);
        };

        fetchBookDetails();
    }, [title]); // Include title or any other dependencies used in the effect

    return (
        <div>
            <h1>Book Details</h1>
            <h2>Title: {title}</h2>
            <h3>Author: {author}</h3>
        </div>
    );
};

export default BookDetail;