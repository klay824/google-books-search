import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}


export default App;
