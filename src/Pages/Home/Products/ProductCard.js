import React from 'react';
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({product, setProducts}) => {
    const {title, image_url, location, original_price, resale_price, using_year, details, ownerName} = product;
    
    return (
            <div className="hero my-4">
                <div className="hero-content grid lg:grid-cols-3 shadow-xl bg-base-100 w-full">
                    <div className='flex mx-auto'>
                        <img src={image_url} className="max-w-sm" alt=''/>
                    </div>
                    <div className='md:px-12 lg:mx-3 lg:col-span-2 w-full'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className="text-3xl font-bold uppercase">{title}</h1>
                                <div className='flex my-3'>
                                    <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                    <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                    <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                    <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                    <FaStarHalfAlt style={{color: '#ffb52f'}}></FaStarHalfAlt>
                                </div>
                                <h3 className="text-lg font-bold flex items-center"><FaMapMarkerAlt className='mr-1 text-[#0000FF]'/>Location: {location}</h3>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                            </div>
                            <div className='text-center'>
                                <h2 className='opacity-75 my-3'>Owner Name: {ownerName}</h2>
                                <h3 className="text-lg font-medium border border-red-300 px-8 py-2 bg-red-50">Original Price: ${original_price}</h3>
                                <h3 className="text-lg font-medium border border-red-300 px-8 py-2 bg-red-50">Resale Price: ${resale_price}</h3>
                                <h4 className="border border-red-300 px-8 py-2 bg-red-50">Using Years: {using_year} Years</h4>
                            </div> 
                        </div>
                        <div>
                            <h3 className="text-xl border-b-2 border-gray-200">Quick Overview</h3>
                            <p className="py-2">{details}</p>
                        </div>
                        <label className="btn btn-outline rounded-none mr-2"
                        >Add to Cart</label>
                        <label 
                        onClick={()=>setProducts(product)}
                        htmlFor="booking-modal" 
                        className="btn btn-outline rounded-none"
                        >Booking Now</label>
                    </div>
                </div>
            </div>
    );
};

export default ProductCard;