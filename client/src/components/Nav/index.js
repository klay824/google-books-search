import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";



function Nav() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" color="default">
            <Tabs value={value} onChange={handleChange} indicatorColor="default">
                <Tab label="Google Books" disabled />

                <Tab label="Search" component={Link} to="/" />

                <Tab label="Saved" component={Link} to="/saved" />
            </Tabs>
        </AppBar>
    );
}

export default Nav;