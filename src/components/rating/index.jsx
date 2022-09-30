import React from 'react';

function Rating(props){
    const rating = props.value
    const ratingArray = ["#dfdfdf","#dfdfdf","#dfdfdf","#dfdfdf","#dfdfdf"]
    ratingArray.map(myFunction)
    
    function myFunction(value, index, array) {
        if(index < parseInt(rating)){
            // console.log(index,'<',parseInt(rating),ratingArray[index])
            ratingArray[index] = "#FC474E"
            // return "#FC474E"
        }
      }
    return (
        <div id="header" className='flex justify-between'>
            <div className='flex'>
                <svg width="30" viewBox="0 0 180 148" version="1.1" >
                    <polygon id="Star" fill={ratingArray[0]} points="77.5 113.385207 29.5955019 147.434885 47.1753657 91.353071 -0.0111060781 56.315115 58.7583453 55.7043253 77.5 0 96.2416547 55.7043253 155.011106 56.315115 107.824634 91.353071 125.404498 147.434885"></polygon>
                </svg>
                <svg width="30" viewBox="0 0 180 148" version="1.1" >
                    <polygon id="Star" fill={ratingArray[1]} points="77.5 113.385207 29.5955019 147.434885 47.1753657 91.353071 -0.0111060781 56.315115 58.7583453 55.7043253 77.5 0 96.2416547 55.7043253 155.011106 56.315115 107.824634 91.353071 125.404498 147.434885"></polygon>
                </svg>
                <svg width="30" viewBox="0 0 180 148" version="1.1" >
                    <polygon id="Star" fill={ratingArray[2]} points="77.5 113.385207 29.5955019 147.434885 47.1753657 91.353071 -0.0111060781 56.315115 58.7583453 55.7043253 77.5 0 96.2416547 55.7043253 155.011106 56.315115 107.824634 91.353071 125.404498 147.434885"></polygon>
                </svg>
                <svg width="30" viewBox="0 0 180 148" version="1.1" >
                    <polygon id="Star" fill={ratingArray[3]} points="77.5 113.385207 29.5955019 147.434885 47.1753657 91.353071 -0.0111060781 56.315115 58.7583453 55.7043253 77.5 0 96.2416547 55.7043253 155.011106 56.315115 107.824634 91.353071 125.404498 147.434885"></polygon>
                </svg>
                <svg width="30" viewBox="0 0 180 148" version="1.1" >
                    <polygon id="Star" fill={ratingArray[4]} points="77.5 113.385207 29.5955019 147.434885 47.1753657 91.353071 -0.0111060781 56.315115 58.7583453 55.7043253 77.5 0 96.2416547 55.7043253 155.011106 56.315115 107.824634 91.353071 125.404498 147.434885"></polygon>
                </svg>
            </div>
        </div>
    );
}

export default Rating;