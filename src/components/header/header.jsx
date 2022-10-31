import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg';

class header extends Component {
    render() {
        return (
            <div id="header" className='flex justify-between'>
                <div>
                    <Link to="/">
                        <img className='h-28' alt='Kasa' src={logo} />
                    </Link>
                </div>
                <ul className='flex items-center '>
                    <li>
                        <Link className='p-3 text-kasa' to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link className='p-3 text-kasa' to="/apropos">A propos</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default header;