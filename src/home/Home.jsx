import React from 'react';
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import Arrival from './Arrival';
import Deals from './Deals';
 

const Home = () => {
    return (
        <main>
            <Banner />
            <HomeCategory />
            <Arrival />
            <Deals />
           
        </main>
    );
};

export default Home;