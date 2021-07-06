import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        glexGrow: 1,
    },
    media: {
        height: 232,
        width: 168,
        margin: "auto",
        paddingTop: "5%",
        alignItems: "center",
    },
    cardText: {
        fontSize: "1rem",
        textAlign: "center",
        padding: "5%",
        margin: "auto",
        fontFamily: "Arial, Helvetica, sans-serif"
    },
    text: {
        fontFamily: "Arial, Helvetica, sans-serif"
    },
    background: {
        backgroundColor: "rgb(44, 122, 109)",
    }
});

function Search({ title, authors, genres, description, image, link, handleSave }) {
    const classes = useStyles();
    return (

        <CardContent className={classes.background}>
            <Card variant="outlined" className={classes.root}>
                <CardContent><h2 className={classes.text}><em>{title}</em></h2></CardContent>
                <CardContent className={classes.text}>Author(s):&nbsp;&nbsp;
                    {authors === undefined ? "There are no authors for this title." :
                        authors.map((author, index) => (
                            <span key={index}>  {author}{index < authors.length - 1 ? ',' : ''}</span>
                        ))}
                </CardContent>
                <CardContent className={classes.text}>Genre(s):&nbsp;&nbsp;
                    {genres === undefined ? "There are no matches for this genre." :
                        genres.map((genre, index) => (
                            <span key={index}>  {genre}{index < genres.length - 1 ? ',' : ''}</span>
                        ))}
                </CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} m={6} lg={4} xl={4}>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title={title}
                        />
                    </Grid>
                    <Grid item xs={12} m={6} lg={8} xl={8}>
                        <CardContent className={classes.cardText}><b>Description:</b> {description}</CardContent>
                    </Grid>
                </Grid>
                <CardActions>
                    <Button variant="outlined" size="small" href={link} target="_blank">View</Button>
                    <Button variant="outlined" size="small" onClick={handleSave}>Save</Button>
                </CardActions>

            </Card>
        </CardContent>

    )
}

export default Search;