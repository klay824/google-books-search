import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <Container maxWidth="xl">
        <Nav />
        <Switch>
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/" component={Search} />
        </Switch>

      </Container>
    </Router>
  );
}


export default App;
