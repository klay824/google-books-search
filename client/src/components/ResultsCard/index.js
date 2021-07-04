import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        maxWidth: 900,
    },
    media: {
        height: 192,
        width: 128,
        flex: "left",
    },
});

function Search({ title, author, description, image, link }) {
    const classes = useStyles();
    return (
        <Card variant="outlined">
            <CardContent>
                <h5>Saved Books</h5>
            </CardContent>
            <CardContent>
                <Card variant="outlined">
                    <CardContent>{title}</CardContent>
                    <CardContent>Author: {author}</CardContent>
                    <CardContent>Description: {description}</CardContent>

                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />

                    <CardActions>
                        <Button size="small" href={link} target="_blank">View</Button>
                        <Button size="small" >Save</Button>
                    </CardActions>

                </Card>
            </CardContent>
        </Card >
    )
}

export default Search;