import React, { Component } from 'react';
import Header from '../components/header'
import Error from '../components/error'

class error extends Component {
    render() {
        return (
            <div className='m-10'>
            <Header />
            <Error />
          </div>
        );
    }
}

export default error;