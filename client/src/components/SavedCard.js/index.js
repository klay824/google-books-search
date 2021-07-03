import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function SavedCard() {
    return (
        <Card variant="outlined">
            <CardContent>
                <h5>Saved Books</h5>
            </CardContent>
            <CardContent>
                <Card variant="outlined">
                    <CardContent>Saved books will go here
                        <CardActions>
                            <Button size="small">View</Button>
                            <Button size="small">Delete</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

export default SavedCard;