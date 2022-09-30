import React, { Component } from 'react';
import bgimage from '../../assets/accommodation-20-1.jpeg';


class banner extends Component {
    render(props) {
        return (
            <div className='text-4xl text-white flex justify-center items-center rounded-lg border-2 border-sky-500 mb-5 px-10' style={{ height: '150px',backgroundImage:`url(${bgimage})` }}>
            {this.props.bannertext}
            </div>
        );
    }
}

export default banner;