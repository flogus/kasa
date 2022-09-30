import React, { Component } from 'react';
import Header from '../components/header/header'
import Banner from '../components/banner/banner'
import Apropos from '../components/apropos/apropos'
import Footer from '../components/footer/footer'

class apropos extends Component {
    componentDidMount() {
        document.title = "Kasa > A Propos"; 
    }

    render() {
        return (
            <div className='flex flex-col min-h-screen'>
                <div className='m-10 flex-1'>
                    <Header />
                    <Banner/>
                    <Apropos />
                </div>
                <Footer />
            </div>
        );
    }
}

export default apropos;