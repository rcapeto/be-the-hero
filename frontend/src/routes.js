import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/New Incident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}