import React from "react";
import Link from "react-router-dom/Link";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function SavedCard({ title, author, description, image, link }) {
    return (
        <Card variant="outlined">
            <CardContent>
                <h5>Saved Books</h5>
            </CardContent>
            <CardContent>
                <Card variant="outlined">
                    <CardContent>{title}</CardContent>
                    <CardContent>{author}</CardContent>
                    <CardContent>{description}</CardContent>
                    <img src={image}></img>
                    <CardActions>
                        <Button size="small" href={link} target="_blank">View</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>

                </Card>
            </CardContent>
        </Card >
    )
}

export default SavedCard;