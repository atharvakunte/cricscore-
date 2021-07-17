import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MatchScoreClass } from './components/MatchScoreClass'
import{Home} from './components/Home'

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/score/:matchId" exact component = {MatchScoreClass}/>
            </Switch>
        </BrowserRouter>
    )
}

