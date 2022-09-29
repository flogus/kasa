import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'

import Header from '../components/header'
// import Detaillogement from '../components/detaillogement'
import Footer from '../components/footer'
import locations from "../datas/logements.json";

function Fichelogement(props) {


    const { id } = useParams()
    const currentLocation = Object.values(locations).filter(
        element => element.id === id
    )
    console.log('currentLocation',currentLocation)
    useEffect((id) => {
        document.title = "Kasa > Détail " + {id}; 
    }, []);


    return (
        <div className='flex flex-col min-h-screen'>
            <div className='m-10 flex-1'>
                <Header />
                <div className='flex mb-5'>
                    <img className='max-w-full h-auto rounded-lg' src={currentLocation[0].pictures[0]} alt={currentLocation[0].title} />
                </div>
                <div className='flex items-center'>
                    <div className='flex-auto'>
                        <h1 className='text-kasa text-2xl'>{currentLocation[0].title}</h1>
                        <h2 className='text-kasa text-sm'>{currentLocation[0].location}</h2>
                    </div>
                    <div className='flex flex-none items-center'>
                        <div className='text-kasa text-sm pr-2' style={{whiteSpace: 'break-spaces'}}>{currentLocation[0].host.name}</div>
                        <img className='max-h-14 rounded-full' src={currentLocation[0].host.picture} alt={currentLocation[0].host.name} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Fichelogement;