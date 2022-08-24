import React, { Component } from 'react';
import Header from '../components/header'
import Banner from '../components/banner'
import Detail from '../components/detail'
import Footer from '../components/footer'

class detail extends Component {
    render() {
        return (
        <div>
            <div className='m-10'>
                <Header />
                <div id="home">
                    <Detail />
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default detail;