import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MagicItemList from '../lists/MagicItemsList';
import MagicItemsDetails from '../details/MagicItemsDetails';

class MagicItems extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/magicitems' component={MagicItemList} />
                <Route path='/magicitems/:magicItemId' component={MagicItemsDetails} />
            </Switch>
        );
    }
}

export default MagicItems;