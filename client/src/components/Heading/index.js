import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { mergeClasses } from "@material-ui/styles";

function Heading() {
    return (
        <Card className={mergeClasses.root}>
            <CardContent>
                <h1>(React) Google Books Search</h1>
                <h4>Search for and Save Books of Interest</h4>
            </CardContent>
        </Card>
    )
}

export default Heading;