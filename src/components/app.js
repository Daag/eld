import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Content from './Content';
import Nav from './Nav';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Content />
                </div>
            </Router>
        );
    }
}

export default App;