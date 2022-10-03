import React from 'react';

function Slideshow(props) {
    const image = props.image
    return (
        <img className='w-full h-auto h-48 rounded-lg object-cover' src={image} alt={image} />
    );
}

export default Slideshow