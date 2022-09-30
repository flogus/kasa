import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'

import Header from '../components/header'
import Footer from '../components/footer'
import Tag from '../components/tag'
import locations from "../datas/logements.json";

function Fichelogement() {
    const { id } = useParams()
    const currentLocation = Object.values(locations).filter(
        element => element.id === id
    )
    console.log('currentLocation',currentLocation)
    useEffect((id) => {
        document.title = "Kasa > Détail " + {id}; 
    }, []);

    const renderListTags = (tags) => {
        return tags.map((tag) => <Tag key={tag} tagname={tag} />)
      }
    
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='m-10 flex-1'>
                <Header />
                <div className='flex justify-center mb-5'>
                    <img className='max-w-full h-auto h-48 rounded-lg' src={currentLocation[0].pictures[0]} alt={currentLocation[0].title} />
                </div>
                <div className='flex items-center mb-5'>
                    <div className='flex-auto'>
                        <h1 className='text-kasa text-2xl'>{currentLocation[0].title}</h1>
                        <h2 className='text-kasa text-sm'>{currentLocation[0].location}</h2>
                    </div>
                    <div className='flex flex-none items-center'>
                        <div className='text-kasa text-sm pr-2' style={{whiteSpace: 'pre-wrap'}}>{currentLocation[0].host.name}</div>
                        <img className='max-h-14 rounded-full' src={currentLocation[0].host.picture} alt={currentLocation[0].host.name} />
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex-auto'>
                        {renderListTags(currentLocation[0].tags)}
                    </div>
                    <div className='flex flex-none items-center'>
                        <div className='text-kasa text-sm pr-2'>{currentLocation[0].rating}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Fichelogement;