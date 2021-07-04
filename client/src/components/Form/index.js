import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "98%"
    },
}));

function SearchForm({ search, handleFormSubmit, handleInputChange }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={handleInputChange}
                        value={search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Gif"
                        id="search"
                    />
                    <button onClick={handleFormSubmit} className="btn btn-primary mt-3">
                        Search
                    </button>
                </div>
            </form>
        </Paper>
    );
}

export default SearchForm;