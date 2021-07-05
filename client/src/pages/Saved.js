import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
            <Card variant="outlined">
                <CardContent>
                    <h3>Saved Books</h3>
                </CardContent>
                {books.map(book => (
                    <SavedCard key={book._id} title={book.title} author={book.author} description={book.description} image={book.image} link={book.link} handleBookDelete={() => deleteBook(book._id)}></SavedCard>
                ))}
            </Card>
        </>
    );
}

export default Saved;