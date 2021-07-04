import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function ResultsCard(props) {
    return (
        <Card variant="outlined">
            <CardContent>
                <h5>Results</h5>
            </CardContent>
            <CardContent>
                <Card variant="outlined">
                    <CardContent>Results will go in here
                        <CardActions>
                            <Button size="small">View</Button>
                            <Button size="small">Save</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

export default ResultsCard;