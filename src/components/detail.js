import React, { Component } from 'react';
import Userprofil from '../components/userprofile'
import Banner from '../components/banner'
class detail extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Userprofil nom="Smith" prenom="John"/>
            </div>
        );
    }
}

export default detail;