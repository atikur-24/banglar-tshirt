import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default Main;