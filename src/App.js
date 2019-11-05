import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Einstellungen from "./pages/Einstellungen";
import {Root, Body} from "./components/globals";
import Footer from './components/Footer'
import Login from "./pages/Login";
import DeinWeg from "./pages/DeinWeg";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Thrive from "./pages/Thrive";
import ErsteChallenge from './pages/ErsteChallenge';

const PageWrapper = ({userId, children}) => {
    const childrenWithProps = React.Children.map(
        children,
        (child, i) => {
            return React.cloneElement(child, {
                userId,
                index: i
            });
        }
    );

    return (
        <Root>
            <Body>
                {childrenWithProps}
            </Body>
            <Footer/>
        </Root>
    )
};

function App() {
    const [userId, setUserId] = useState(null);
    if (userId == null) {
        return (
            <div style={{height: '100%', margin: 0}}>
                <Root>
                    <Body>
                        <Login setUserId={setUserId}/>
                    </Body>
                </Root>
            </div>
        )
    }

    return (
        <div style={{height: '100%', margin: 0}}>
            <Router>
                <Switch>
                    <Route path="/profile">
                        <PageWrapper userId={userId}>
                            <Einstellungen/>
                        </PageWrapper>
                    </Route>
                    <Route path="/deinweg">
                        <PageWrapper userId={userId}>
                            <DeinWeg/>
                        </PageWrapper>
                    </Route>
                    <Route path="/training">
                        <PageWrapper userId={userId}>
                            <Training/>
                        </PageWrapper>
                    </Route>
                    <Route path="/thrive">
                        <PageWrapper userId={userId}>
                            <Thrive/>
                        </PageWrapper>
                    </Route>
                    <Route path="/erstechallenge">
                        <PageWrapper userId={userId}>
                            <ErsteChallenge/>
                        </PageWrapper>
                    </Route>
                    <Route>
                        <PageWrapper userId={userId}>
                            <Home />
                        </PageWrapper>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
