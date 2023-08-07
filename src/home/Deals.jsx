import React, { useEffect, useState } from 'react';
import Heading from '../utility/Heading';

const Deals = () => {
const [data,setData] = useState([])
    useEffect(() => {
        
    },[])
    return (
        <section className='mt-12'>
            <Heading heading='Today Deals' text='find your expected discount Products'/>
            
        </section>
    );
};

export default Deals;