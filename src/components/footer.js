import React, { Component } from 'react'
import logoFooter from '../assets/kasaFooter.png';

export default class footer extends Component {
  render() {
    return (
      <div className='text-xs bg-black text-white flex flex-col p-5 justify-center items-center'>
        <img alt='Kasa' src={logoFooter} />
        <div>© 2020 Kasa. All right reserved</div>
      </div>
    )
  }
}
