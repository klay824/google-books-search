import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
// import TextField from "@material-ui/core/TextField";
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "98%"
    },
}));

function SearchForm({ search, handleInputChange }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <form className="search">
                <div className="form-group">
                    <label htmlFor="language">Search Term:</label>
                    <input
                        value={search}
                        onChange={handleInputChange}
                        name="term"
                        list="term"
                        type="text"
                        className="form-control"
                        placeholder="Type in a search term to begin"
                        id="term"
                    />
                </div>
            </form>
        </Paper>
    );
}

export default SearchForm;