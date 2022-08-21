import ReactDOM from 'react-dom/client';
// import { Routes, Route } from "react-router-dom";

import './App.css';

// Your components.
import Header from './components/header'
import Home from './components/home'
import Apropos from './components/apropos'
import Footer from './components/footer'
import Error from './components/error'

function App() {
  return (
      <div className='m-10'>
        <Header />
        
        <Home />
        <Apropos />
        <Error />

        <Footer />


      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apropos" element={<Apropos />} />
      </Routes> */}
      </div>
  );
}

export default App;
