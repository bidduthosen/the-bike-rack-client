import React from 'react';
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({product}) => {
    console.log(product);
    const {title, image_url, location, original_price, resale_price, using_year, details} = product;
    return (
        <div className="hero my-4">
            <div className="hero-content flex-col lg:flex-row  shadow-xl bg-base-100">
                <img src={image_url} className="max-w-sm" alt=''/>
                <div className='px-3'>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className='flex my-3'>
                    <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar><FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar><FaStarHalfAlt style={{color: '#ffb52f'}}></FaStarHalfAlt>
                </div>
                <h3 className="text-lg font-bold flex items-center"><FaMapMarkerAlt className='mr-1 text-[#0000FF]'/>Location: {location}</h3>
                <div className='flex justify-around items-center shadow-lg rounded-lg bg-base-200 my-2 py-2'>
                    <div>
                        <h3 className="text-lg font-medium">Original Price: ${original_price}</h3>
                        <h3 className="text-lg font-medium">Resale Price: ${resale_price}</h3>
                    </div>
                    <div>
                        <h4 className="">Using Years: {using_year} Years</h4>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                
                <p className="py-6">{details}</p>
                    <button className="btn btn-outline rounded-none flex mx-auto">Booking Now</button>
                </div>
            </div>
            </div>
    );
};

export default ProductCard;