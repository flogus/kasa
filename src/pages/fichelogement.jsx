import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import LogementFactory from '../components/logement';

function Fichelogement() {
    const { id } = useParams()

    return (
        <LogementFactory key={id} id={id} type='detail' />
    );
}

export default Fichelogement;