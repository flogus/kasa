import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Tag from '../components/tag/tag'
import locations from "../datas/logements.json";
import Rating from '../components/rating';
import Collapseblock from '../components/collapseblock/collapseblock'
import Slideshow from '../components/slideshow/slideshow';

function Fichelogement() {
    const { id } = useParams()
    const currentLocation = Object.values(locations).filter(
        element => element.id === id
    )
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
                    <Slideshow images={currentLocation[0].pictures} />
                </div>
                <div className='flex flex-wrap itemscenter mb-5'>
                    <div className=' flex flex-col flex-auto basis-full md:basis-1/2'>
                        <h1 className='text-kasa text-2xl'>{currentLocation[0].title}</h1>
                        <h2 className='text-kasa text-sm'>{currentLocation[0].location}</h2>
                    </div>

                    <div className=' flex flex-auto items-center basis-full md:basis-1/2 md:order-3'>
                        {renderListTags(currentLocation[0].tags)}
                    </div>
                    <div className=' flex flex-none items-center basis-1/2 md:order-4'>
                        <div className='text-kasa text-sm pr-2 flex justify-start md:justify-end  w-full'>
                            <Rating value={currentLocation[0].rating} />
                        </div>
                    </div>
                    <div className=' flex flex-auto justify-end items-center'>
                        <div className='text-kasa text-sm pr-2 text-right'>{currentLocation[0].host.name.split(' ')[0]}<br />{currentLocation[0].host.name.split(' ')[1]}</div>
                        <img className='max-h-14 rounded-full' src={currentLocation[0].host.picture} alt={currentLocation[0].host.name} />
                    </div>                    
                </div>
                <div className='flex flex-col lg:flex-row mb-5'>
                    <div className='lg:mr-5 w-full' >
                        <Collapseblock title='Description' content={currentLocation[0].description} />
                    </div>
                    <div className='lg:ml-5 w-full'>
                        <Collapseblock islist={true} title='Équipements' content={currentLocation[0].equipments} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Fichelogement;