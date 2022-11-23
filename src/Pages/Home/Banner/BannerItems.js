import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BannerItems = ({slider}) => {
    const {image, id , prev, next} = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full my-8">
            <div className='carousel-img '>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4 bg-slate-400 hover:bg-slate-300 "><FaArrowLeft className='text-black'/></a> 
                <a href={`#slide${next}`} className="btn btn-circle bg-slate-400 hover:bg-slate-300"><FaArrowRight className='text-black'/></a>
            </div>
        </div>
    );
};

export default BannerItems;