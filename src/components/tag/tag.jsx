import React from 'react';
import uuid from 'react-native-uuid';

function Tag(props) {
    const tagname = props.tagname    
    const key = uuid.v4()
    return (
        <div key={key} className='bg-kasa p-2 mr-2 text-xs text-white rounded inline-flex flex-wrap'>{tagname}</div>
    );
}

export default Tag;