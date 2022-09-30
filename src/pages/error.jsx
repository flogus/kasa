import React, { Component } from 'react';
import Header from '../components/header/header'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'

class error extends Component {
    componentDidMount() {
        document.title = "Kasa error 404"; 
    }
    render() {
        return (
            <div className='flex flex-col min-h-screen'>
                <div className='m-10 flex-1'>
                    <Header />
                    <Error />
                </div>
                <Footer />
            </div>
        );
    }
}

export default error;