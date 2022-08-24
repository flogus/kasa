import React, { Component } from 'react';
import Userprofil from '../components/userprofile'
import Banner from '../components/banner'
class detail extends Component {
    render(props) {
        return (
            <div>
                <h1>title : {this.props.title}</h1>
                <h1>description : {this.props.description}</h1>
                <Banner />
                <Userprofil nom={this.props.title} prenom="John"/>
            </div>
        );
    }
}

export default detail;