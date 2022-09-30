import React from 'react';

function Tag(props) {
    const tagname = props.tagname    
    const key = props.tagname.toLowerCase().substring(0,3)
    return (
        <div key={key} className='bg-kasa p-2 mr-2 text-xs text-white rounded inline-flex flex-wrap'>{tagname}</div>
    );
}

export default Tag;