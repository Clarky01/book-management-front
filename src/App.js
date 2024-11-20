// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './Pages/AddBook';
import ViewBooks from './Pages/ViewBook';
import Home from './Pages/Home';

const App = () => {
    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks((prevBooks) => [...prevBooks, book]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddBook addBook={addBook} />} />
                <Route path="/view" element={<ViewBooks books={books} />} />
            </Routes>
        </Router>
    );
};

export default App;