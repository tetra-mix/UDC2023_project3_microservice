import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Top from './Top';
import Info from './Info';
import Links from './Links';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top/>} />
        <Route path='/Info' element={<Info/>} />
        <Route path='/Links' element={<Links/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

