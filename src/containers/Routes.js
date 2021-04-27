import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/home' exact component={Home}>
                </Route>
                <Route path='/register' exact component={Register}/>
                
            </Switch>
        </Router>
    );
}
export default Routes;