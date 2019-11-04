import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Einstellungen from "./pages/Einstellungen";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Einstellungen/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
