import React, { Component } from 'react';
import Header from '../components/header'
import Banner from '../components/banner'
import Apropos from '../components/apropos'
import Footer from '../components/footer'

class apropos extends Component {
    render() {
        return (
        <div>
            <div className='m-10'>
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