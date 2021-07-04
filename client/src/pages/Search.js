import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import SearchForm from "../components/Form";
import ResultsCard from "../components/ResultsCard";
import API from "../utils/API";

function Search() {
    const [search, setSearch] = useState("Star Wars");
    const [results, setResults] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!search) {
            return;
        }

        API.callGoogle(search)
            .then(res => {
                console.log(res);
                if (res.data.items.length === 0) {
                    throw new Error("No results found.");
                }
                setResults(res.data.items);
            })
            .catch(err => setError(err));
    }, [search]);
    console.log(results);

    return (
        <div>
            <Heading />
            <SearchForm
            />
            <ResultsCard />
        </div>
    )
}

export default Search;




