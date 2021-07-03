import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Nav() {
    const location = useLocation();
    return (
        <AppBar position="static" color="default">
            <Tabs>
                <Tab label="Google Books" disabled></Tab>
                <Link to="/search" className={location.pathname === "/search"}>
                    <Tab label="Search" />
                </Link>
                <Link to="/saved" className={location.pathname === "/saved"}>
                    <Tab label="Saved" />
                </Link>
            </Tabs>
        </AppBar>
    );
}

export default Nav;