import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import AproposPage from './pages/apropos'
import HomePage from './pages/home'
import FichePage from './pages/fichelogement'
import ErrorPage from './pages/error'
class kasarouter extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/apropos" element={<AproposPage />} />
                    <Route path="/fichelogement/:id" element={<FichePage />} />
                </Routes>
            </Router>
        );
    }
}

export default kasarouter