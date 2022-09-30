import React, { Component } from 'react';
import Header from '../components/header/header'
import Banner from '../components/banner/banner'
import Grid from '../components/logement/grid'
import Footer from '../components/footer/footer'
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