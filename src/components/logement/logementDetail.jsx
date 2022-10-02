import React from 'react';
import Userprofil from '../userprofile/userprofile'
import Banner from '../banner/banner'

function LogementDetail(props) {
    const title = props.title
    const description = props.description

    return (
        <div>
            <h1>Fiche logement<br />title : {title}</h1>
            <h1>description : {description}</h1>
            <Banner />
            <Userprofil nom={title} prenom="John"/>
        </div>
    );
}

export default LogementDetail;