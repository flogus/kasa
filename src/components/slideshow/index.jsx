import React, { useEffect ,useState } from 'react';
import next from '../../assets/next.svg';
import previous from '../../assets/previous.svg'

function Slideshow(props) {
    const imagesData = props.images
    const maximage = imagesData.length
    const [currentindex, setCurrentIndex] = useState(0)
    const [currentimagesrc, setCurrentimagesrc] = useState(imagesData[0])
    
    const imagePrev = () => {
        if(currentindex === 0){
            setCurrentIndex(maximage - 1)
        } else {
            setCurrentIndex(currentindex - 1)
        }
    }
    const imageNext = () => {
        if(currentindex === maximage - 1){
            console.log('max')
            setCurrentIndex(0)            
        } else {
            setCurrentIndex(currentindex + 1)
        }
    }

    useEffect(() => {
        console.log('useEffect')
        setCurrentimagesrc(imagesData[currentindex])
    },[currentindex,imagesData]);

    return (
        <div className='w-full relative'>
            <a href='#precedent' className='absolute left-0 top-0 h-full flex items-center pl-10' onClick={imagePrev}>
                <img className='h-16 opacity-50 hover:opacity-100' src={previous} alt='Précédent'/>
            </a>
            <img className='w-full h-auto h-80 rounded-lg object-cover' src={currentimagesrc} alt={currentimagesrc} />
            <div className='absolute bottom-0 flex w-full justify-center pb-5 text-white'>{currentindex+1}/{maximage}</div>
            <a href='#suivant' className='absolute right-0 top-0 h-full flex items-center pr-10' onClick={imageNext}>
                <img className='h-16 opacity-50 hover:opacity-100' src={next} alt='Suivant'/>
            </a>
        </div>
    );
}

export default Slideshow