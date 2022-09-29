import React, { Component } from 'react';
import Header from '../components/header'
import Fichelogement from '../components/fichelogement'
import Footer from '../components/footer'
import { useLocation } from 'react-router-dom'

class detail extends Component {
    componentDidMount() {
        document.title = "Kasa > Détail"; 
    }
    


    render(props) {
        return (
            <div className='flex flex-col min-h-screen'>
                <div className='m-10 flex-1'>
                    <Header />
                    <h1 className='text-kasa border-solid border-2'>nom : {this.props.nom}</h1>
                    <h1 className='text-kasa border-solid border-2'>title : {this.props.title}</h1>
                    <h1 className='text-kasa border-solid border-2'>description : {this.props.description}</h1>
                    <div id="home">
                        <Fichelogement />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default detail;