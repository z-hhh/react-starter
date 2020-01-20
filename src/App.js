/** @format */

import 'typeface-roboto';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import(/* webpackChunkName: "home" */ './pages/home'));

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
