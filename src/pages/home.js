import React, { Component } from 'react';
import Header from '../components/header'
import Banner from '../components/banner'
import Grid from '../components/grid'
import Footer from '../components/footer'

class home extends Component {
    componentDidMount() {
        document.title = "Kasa"; 
    }
    
    render() {
        return (
            <div className='flex flex-col min-h-screen'>
                <div className='m-10 flex-1'>
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