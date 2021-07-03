import React, { useState, useEffect } from "react";
import API from "../utils/API";

import Heading from "../components/Heading";
import SavedCard from "../components/SavedCard";

function Saved() {
    // setting initial state
    const [books, setBooks] = useState([])

    // loads all books and stores them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // deletes books
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    };

    return (
        <>
            <Heading />
            {books.map(book => (
                <SavedCard key={book._id} title={book.title} author={book.author} description={book.description} image={book.image} link={book.link} handleBookDelete={() => deleteBook(book._id)}></SavedCard>
            ))}

        </>
    );
}

export default Saved;