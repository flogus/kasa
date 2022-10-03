import React, { useState } from 'react';
import next from '../../assets/next.svg';
import previous from '../../assets/previous.svg'

function Slideshow(props) {
    const images = props.images
    const currentimage = images[0]
    const maximage = images.length
    const [currentimagenb, setCurrentimagenb] = useState(1)

    const clickPrev = () => (
        setCurrentimagenb(currentimagenb - 1)
    )
    const clickNext = () => (
        setCurrentimagenb(currentimagenb + 1)
    )

    return (
        <div className='w-full relative'>
            <a href='#precedent' className='absolute left-0 top-0 h-full flex items-center pl-10' onClick={clickPrev}>
                <img className='h-16' src={previous} alt='Précédent'/>
            </a>
            <img className='w-full h-auto h-80 rounded-lg object-cover' src={currentimage} alt={currentimage} />
            <div className='absolute bottom-0 flex w-full justify-center pb-5 text-white'>{currentimagenb}/{maximage}</div>
            <a href='#suivant' className='absolute right-0 top-0 h-full flex items-center pr-10' onClick={clickNext}>
                <img className='h-16' src={next} alt='Suivant'/>
            </a>
        </div>
    );
}

export default Slideshow