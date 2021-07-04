import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import SearchForm from "../components/Form";
import ResultsCard from "../components/ResultsCard";
import API from "../utils/API";

function Search() {
    const [search, setSearch] = useState("Star Wars");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!search) {
            return;
        }

        API.callGoogle(search)
            .then(res => {
                console.log("response", res);
                if (res.data.items.length === 0) {
                    throw new Error("No results found.");
                }
                setResults(res.data.items);
            })
            .catch(err => setError(err));
    }, [search]);
    console.log("results", results);

    const handleInputChange = event => {
        setSearch(event.target.value);
    }

    const handleSave = (index) => {
        console.log([index]);
        console.log(results[index].volumeInfo);
        API.saveBook({
            title: results[index].volumeInfo.title,
            author: results[index].volumeInfo.authors,
            description: results[index].volumeInfo.description,
            image: results[index].volumeInfo.imageLinks === undefined ? "https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-200x300.jpg" : results[index].volumeInfo.imageLinks.thumbnail,
            link: results[index].volumeInfo.infoLink
        })
            .then(res => console.log("Successful save to database.", res))
            .catch(err => console.log("this is an error", err))
    }

    return (
        <div>
            <Heading />
            <SearchForm
                results={search} handleInputChange={handleInputChange}
            />
            {results.map((result, i) => (
                <ResultsCard key={result.volumeInfo.infoLink} title={result.volumeInfo.title} author={result.volumeInfo.authors} description={result.volumeInfo.description} image={result.volumeInfo.imageLinks === undefined ? "https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-200x300.jpg" : `${result.volumeInfo.imageLinks.thumbnail}`} link={result.volumeInfo.infoLink} handleSave={() => handleSave(i)} />

            ))}

        </div>
    )
}

export default Search;




