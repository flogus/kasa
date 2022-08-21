import React, { Component } from 'react'

class error extends Component {
  render() {
    return (
      <div>

          <div className='text-kasa text-center' style={{fontSize: '160px',fontWeight: 'bold'}}>404</div>
          <div className='text-xl text-kasa text-center'>Oups! La page que vous demandez n'existe pas.</div>
          <div className='text-xs text-kasa text-center pt-10'><a href="/">Retournez sur la page d'accueil</a></div>
      </div>
    )
  }
}

export default error;