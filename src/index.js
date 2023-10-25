import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Home from './views/Home';
import Services from './components/Services';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import Contact from './views/Contact';
import NotFound from './views/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/news' element={<News />}  />
          <Route path='/newsDetails' element={<NewsDetails />}  />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


