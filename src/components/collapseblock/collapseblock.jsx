import React, { Component } from 'react';
import svgUp from '../../assets/chevron-up.svg';
import svgDown from '../../assets/chevron-down.svg';

class collapseblock extends Component {
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false
        };
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    render() {
        return (
            <div className='mb-4 bg-gray-200 rounded' onClick={this.toggleClass}>
                <div className='bg-kasa p-2 rounded flex justify-between'>
                    <span className='text-white self-center'>{this.props.title}</span>
                    <img src={this.state.active ? svgUp: svgDown} alt={this.state.active ? "Fermer": "Ouvrir"} className='h-6 visible text-white' />
                </div>
                <div className={this.state.active ? 'h-0 invisible': 'p-2 visible text-kasa'}>{this.props.content}</div>
            </div>
        );
    }
}

export default collapseblock;