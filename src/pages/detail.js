import React, { Component } from 'react';
import Header from '../components/header'
import Detail from '../components/detail'
import Footer from '../components/footer'

class detail extends Component {
    componentDidMount() {
        document.title = "Kasa > Détail"; 
    }

    render() {
        return (
            <div className='flex flex-col min-h-screen'>
                <div className='m-10 flex-1'>
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