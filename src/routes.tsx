import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Contact from './views/Contact';

const Rotas: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
  
    )
}

export default Rotas;