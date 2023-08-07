import React from 'react';
import { Link } from 'react-router-dom';
import './Daynamic.css'




const DCard = ({obj}) => {
  const { _id, img, title, specification, price } = obj
  
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <Link to={_id}>
            <img className="h-[240px] w-full" src={img} alt="T-shirt" />
          </Link>
          <div className="card-body">
            <Link to={_id}>
              <h2 className="card-title">{title}</h2>
            </Link>
            <p>{specification}</p>
            <div className="card-actions justify-end">
              <p className="text-2xl price">{price}-TK</p>
              <button className='button'>Quick View</button>
               
            </div>
          </div>
        </div>
     
    );
};

export default DCard;