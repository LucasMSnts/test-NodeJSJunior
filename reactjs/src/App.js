import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
        </BrowserRouter>
    );
}

export default App;
