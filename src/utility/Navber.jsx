import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import './utility.css'
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
      <nav className="py-1 background navbar">
        <div className="flex justify-between items-center w-[94%] mx-auto">
          {/*nav start*/}
          <Link to="/">
            <img
              className="w-[110px] lg:w-[160px]"
              src="https://i.ibb.co/7WwYXBF/IMG-20230803-010939.png"
              alt="logo"
            />
          </Link>
          {/* nav second */}
          <div className="lg:w-[600px] px-5">
            <div className="form-control w-full">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input w-full input-bordered"
                />
                <button className="btn bg-slate-600 btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* navbar end */}
          <div className="flex justify-between items-center gap-2 lg:gap-6">
            <div className="z-10 tooltip tooltip-bottom" data-tip="hello">
              <div className="avatar">
                <div className="w-10 mt-2 lg:w-12 rounded-full">
                  <img src="https://i.ibb.co/Fb9fVYG/FB-IMG-1690086789965.jpg"/>
                </div>
              </div>
            </div>
            <Link to="/cart">
              <FaShoppingCart className="text-amber-400 text-3xl lg:text-4xl"/>
            </Link>
          </div>
        </div>
      </nav>
    );
};

export default Navber;




  
    