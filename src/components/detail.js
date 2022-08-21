import React, { Component } from 'react';
import Userprofil from '../components/userprofile'

class detail extends Component {
    render() {
        return (
            <div>
                Detail
                <Userprofil nom="Smith" prenom="John"/>
            </div>
        );
    }
}

export default detail;