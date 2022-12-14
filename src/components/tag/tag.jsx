import React from 'react';
import uuid from 'react-native-uuid';

function Tag(props) {
    const tagname = props.tagname    
    const key = uuid.v4()
    return (
        <div key={key} className='bg-kasa py-2 px-5 mr-2 text-xs text-white rounded-lg inline-flex flex-wrap'>{tagname}</div>
    );
}

export default Tag;