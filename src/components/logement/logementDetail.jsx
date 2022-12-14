import React from 'react';
import Header from '../header/header';
import Tag from '../tag/tag'
import Slideshow from '../slideshow/slideshow';
import Rating from '../rating/rating'
import Collapseblock from '../collapseblock/collapseblock'
import Footer from '../footer/footer';
import locations from '../../datas/logements.json'
import { Navigate } from "react-router-dom";


function LogementDetail(props) {
    const id = props.id
    const currentLocation = Object.values(locations).filter(
        element => element.id === id
    )

    if(currentLocation.length <= 0){
        return <Navigate to="*" />;
    }

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
                        <Collapseblock islist={true} title='??quipements' content={currentLocation[0].equipments} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LogementDetail;