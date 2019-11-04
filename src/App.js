import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Einstellungen from "./pages/Einstellungen";
import {Root, Body} from "./components/globals";
import Footer from './components/Footer'

function App() {
    return (
        <Root>
            <Body>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Einstellungen/>
                        </Route>
                    </Switch>
                </Router>
                <div style={{fontSize: "0px"}}>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik"
                                          title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
                                                                              title="Flaticon">www.flaticon.com</a>
                    </div>
                </div>
            </Body>
            <Footer/>
        </Root>
    );
}

export default App;
