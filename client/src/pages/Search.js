import React, { Component } from "react";
import Heading from "../components/Heading";
import SearchForm from "../components/Form";
import ResultsCard from "../components/ResultsCard";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: []
    };

    // when the component loads, we will search for Star Wars books
    componentDidMount() {
        this.searchGoogleBooks("star wars");
    }

    searchGoogleBooks = query => {
        API.callGoogle(query)
            .then(res => {
                console.log(res);
                this.setState({ results: res.data.items })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGoogleBooks(this.state.search);
    };

    render() {
        return (
            <>
                <Heading />
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultsCard results={this.state.results} />
            </>
        )
    }
}

export default Search;