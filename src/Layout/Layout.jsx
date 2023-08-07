import React from 'react';
import Navber from '../utility/Navber';
import Footer from '../utility/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navber />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;