import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        paddingTop: "5px",
        paddingBottom: "5px",
        flex: 1,
    },
    text: {
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "white"
    },
    background: {
        backgroundColor: "rgb(44, 122, 109)",
    }
}));

function SearchForm({ search, handleInputChange }) {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.background}>
            <CardContent><h2 className={classes.text}>Search</h2></CardContent>
            <CardContent>
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Type Your Book Here"
                        value={search}
                        onChange={handleInputChange}
                        name="term"
                        list="term"
                        type="text"
                        id="term"
                    />
                </Paper>
            </CardContent>
        </Card>
    );
}

export default SearchForm;

{/* <form className="search">
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
</form> */}