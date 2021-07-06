import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Heading from "../components/Heading";
import SearchForm from "../components/Form";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ResultsCard from "../components/ResultsCard";
import API from "../utils/API";

const useStyles = makeStyles({
    background: {
        backgroundColor: "rgb(44, 122, 109)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif"
    },
})

function Search() {
    const [search, setSearch] = useState("Star Wars");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    console.log(error);

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

    const classes = useStyles();

    return (
        <div>
            <Heading />
            <SearchForm
                results={search} handleInputChange={handleInputChange}
            />
            <Card variant="outlined" >
                <CardContent className={classes.background}>
                    <h2>Results</h2>
                </CardContent>
                {results.map((result, index) => (
                    <ResultsCard key={index} title={result.volumeInfo.title} authors={result.volumeInfo.authors} description={result.volumeInfo.description} image={result.volumeInfo.imageLinks === undefined ? "https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical-200x300.jpg" : `${result.volumeInfo.imageLinks.thumbnail}`} link={result.volumeInfo.infoLink} handleSave={() => handleSave(index)} />
                ))}
            </Card>
        </div>
    )
}

export default Search;




