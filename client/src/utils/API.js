import axios from "axios";

export default {
    // call to the Google Books api
    callGoogle: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
    },
    // Gets all saved books from database
    getBooks: function () {
        return axios.get("/api/books");
    },
    // deletes saved book from database
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // saves new book to database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData)
    }
};