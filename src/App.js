import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

// Your components.
import Header from './components/header'
import Apropos from './components/apropos'
import Footer from './components/footer'
import Error from './components/error'

function App() {
  return (
    
      <div className='m-10'>
        <Header />
        
        <Apropos />
        <Error />

        <Footer />

      </div>
  );
}

export default App;
