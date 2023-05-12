import React from 'react';
import ReactDOM from 'react-dom/client';
import Contextprovider from './Store/Contextprovider';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

/*
    Bootstrap configration
*/
import '../node_modules/react-bootstrap/dist/react-bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <BrowserRouter>
            <Contextprovider>
            <App />
            </Contextprovider>
            </BrowserRouter>
            );
