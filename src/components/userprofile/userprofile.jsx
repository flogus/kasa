import React, { Component } from 'react';

class userprofile extends Component {
    render(props) {
        return (
            <div>
                <div>{this.props.title} {this.props.description}</div>
                <div>circle</div>
            </div>
        );
    }
}

export default userprofile;