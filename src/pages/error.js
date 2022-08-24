import React, { Component } from 'react';
import Header from '../components/header'
import Error from '../components/error'
import Footer from '../components/footer'

class error extends Component {
    render() {
        return (
        <div className='flex flex-col justify-around'>
            <div className='m-10'>
                <Header />
                <Error />
            </div>
            <Footer />
        </div>
        );
    }
}

export default error;