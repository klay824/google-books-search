import React from "react";
import Heading from "../components/Heading.js";
import SearchForm from "../components/Form";
import ResultsCard from "../components/ResultsCard.js";

function Search() {
    return (
        <>
            <Heading />
            <SearchForm />
            <ResultsCard />
        </>
    )
}

export default Search;