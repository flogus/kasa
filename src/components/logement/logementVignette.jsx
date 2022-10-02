import React from 'react'
import { Link } from "react-router-dom";

function LogementVignette(props) {
    const id = props.id
    const title = props.title
    const pictures = props.pictures

    return (
      <Link to={{ pathname: `/fichelogement/${id}`}} title={title} state={{ from: "occupation " }}> 
        <div id={id} className='flex flex-col items-center rounded-lg bg-kasa text-white p-3' style={{height: '170px'}}>
            <img style={{border:'2px solid'}} src={pictures[0]} alt={title} />
            <h2>{title}</h2>
        </div>
      </Link>
    )
}

export default LogementVignette;