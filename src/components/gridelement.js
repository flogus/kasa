import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class gridelement extends Component {
  render(props) {
    return (
      // <Link className='p-3 text-kasa' to={`/detail/${this.props.id}`}>
      <Link to={{ pathname: `/detail/${this.props.id}`}} state={{ from: "occupation " }}> 
        <div id={this.props.id} className='flex items-end rounded-lg bg-kasa text-white p-3' style={{height: '300px'}}>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </div>
      </Link>
    )
  }
}
