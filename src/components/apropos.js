import React, { Component } from 'react'
import Collapseblock from './collapseblock'

class apropos extends Component {
  render() {
    return (
      <div className='my-3 px-10'>
        <Collapseblock title="Fiabilité" content="In cursus turpis massa tincidunt dui ut ornare lectus." />
        <Collapseblock title="Repect" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque." />
        <Collapseblock title="Service" content="Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien." />
        <Collapseblock title="Responsabilité" content="Magnis dis parturient montes nascetur." />
      </div>

    )
  }
}

export default apropos;