import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './views/Home';
import Gods from './views/Gods';
import MagicItems from './views/MagicItems';
import Places from './views/Places';
import Races from './views/Races';

class Content extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/gods" component={Gods} />
                    <Route path="/magicitems" component={MagicItems} />
                    <Route path="/places" component={Places} />
                    <Route path="/races" component={Races} />
                </Switch>
            </div>
        );
    }
}

export default Content;
