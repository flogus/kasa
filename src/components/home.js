import React, { Component } from 'react';
import Header from './header';
import Banner from './banner';
import Grid from './grid';

class home extends Component {
    render() {
        return (
            <div id="home">
                <Banner />
                <Grid />
            </div>
        );
    }
}

export default home;
