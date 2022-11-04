import React from 'react'
import { Link } from "react-router-dom";

function LogementVignette(props) {
    const id = props.id
    const title = props.title
    const pictures = props.pictures
//linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 100%))
    return (
      <Link to={{ pathname: `/fichelogement/${id}`}} title={title} state={{ from: "occupation " }}> 
        <div id={id} className='flex flex-col items-center rounded-lg text-white p-3 h-full min-h-300px bg-cover' style={{backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 70%)),url(${pictures[0]})`}}>
            <h2 className='flex-auto flex flex-row align-center items-end w-full'>{title}</h2>
        </div>
      </Link>
    )
}

export default LogementVignette;