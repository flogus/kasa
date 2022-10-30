import React from 'react';
import LogementDetail from './logementDetail';
import LogementVignette from './logementVignette';

function LogementFactory(props) {
    const type = props.type
    const id = props.id
    const title = props.title
    const description = props.description
    const pictures = props.pictures

    if(type === 'detail'){
        return (
            <LogementDetail id={id} />
        );
    } else {
        return (
            <LogementVignette id={id} title={title} description={description} pictures={pictures} />
        );
    }
}

export default LogementFactory