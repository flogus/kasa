import React, { Component } from 'react';
import Header from '../components/header'
import Banner from '../components/banner'
import Grid from '../components/grid'
import Footer from '../components/footer'

class home extends Component {
    render() {
        return (
        <div>
            <div className='m-10'>
                <Header />
                <div id="home">
                    <Banner bannertext="Chez vous, et partout ailleurs"/>
                    <Grid />
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default home;