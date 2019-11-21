import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Order from './pages/Order';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Order} />
            </Switch>
        </BrowserRouter>
    );
}
