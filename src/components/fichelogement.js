import React, { Component } from 'react';
import Userprofil from './userprofile'
import Banner from './banner'
class fichelogement extends Component {
    render(props) {
        return (
            <div>
                <h1>Fiche logement<br />title : {this.props.title}</h1>
                <h1>description : {this.props.description}</h1>
                <Banner />
                <Userprofil nom={this.props.title} prenom="John"/>
            </div>
        );
    }
}

export default fichelogement;