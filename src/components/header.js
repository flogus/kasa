import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import './header.css';

class header extends Component {
    render() {
        return (
            <div id="header" className='flex justify-between'>
                <div>
                    <img alt='Kasa' src={logo} />
                </div>
                <div className='self-center'>
                    <ul className='flex'>
                        <li><a className='p-3 text-kasa' href='accueil'>Accueil</a></li>
                        <li><a className='p-3 text-kasa' href='a-propos'>A propos</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default header;