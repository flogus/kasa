import React, { Component } from 'react'

export default class gridelement extends Component {
  render(props) {
    return (
        <div id={this.props.id} className='flex items-end rounded-lg bg-kasa text-white p-3' style={{height: '300px'}}>
            <h2>{this.props.titre}</h2>
        </div>
    )
  }
}
