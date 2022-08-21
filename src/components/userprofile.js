import React, { Component } from 'react';

class userprofile extends Component {
    render(props) {
        return (
            <div>
                <div>{this.props.nom} {this.props.prenom}</div>
                <div>circle</div>
            </div>
        );
    }
}

export default userprofile;