import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DCard from './DCard';


const Daynamic = () => {
    const data = useLoaderData()
     
    return (
        <section className='grid grid-cols-4 gap-10 w-[90%] mx-auto mt-12'>
            {data.map(v=> <DCard obj={v} key={v._id}/>)}
         </section>
    );
};

export default Daynamic;