import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles({
    text: {
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "white"
    },
    card: {
        textAlign: "center",
        backgroundColor: "rgb(44, 122, 109)",
    },

})

function Heading() {
    const classes = useStyles();
    return (
        <Card className={mergeClasses.root} className={classes.card}>
            <CardContent>
                <h1 className={classes.text}>(React) Google Books Search</h1>
                <h4 className={classes.text}>Search for and Save Books of Interest</h4>
            </CardContent>
        </Card>
    )
}

export default Heading;