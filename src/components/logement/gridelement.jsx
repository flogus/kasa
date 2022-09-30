import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class gridelement extends Component {
  render() {
    return (
      <Link to={{ pathname: `/fichelogement/${this.props.id}`}} title={this.props.title} state={{ from: "occupation " }}> 
        <div id={this.props.id} className='flex flex-col items-center rounded-lg bg-kasa text-white p-3' style={{height: '170px'}}>
            <img style={{border:'2px solid'}} src={this.props.pictures[0]} alt={this.props.title} />
            <h2>{this.props.title}</h2>
        </div>
      </Link>
    )
  }
}