
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams(); 
    const [book, setBook] = useState({
        title: '',
        author: '',
        
    });

   
    React.useEffect(() => {
       
        const fetchedBook = { id, title: 'Sample Book', author: 'John Doe' }; 
        setBook(fetchedBook);
    }, [id]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update the book goes here (e.g., API call)
        console.log('Updated Book:', book);
    };

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Add other fields as necessary */}
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditBook;