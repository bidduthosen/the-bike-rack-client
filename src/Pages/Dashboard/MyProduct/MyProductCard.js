import React from 'react';
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const MyProductCard = ({product}) => {
    const {title, image_url, location, original_price, resale_price, using_year, details, ownerName} = product;

    return (

        <div>
            <h2 className="text-2xl font-semibold border-b-4 border-gray-500 my-5 p-4 md:w-3/12 ">My Products</h2>
            <div className='md:flex gap-4 bg-base-100 w-[98%] mx-auto mt-6 shadow-xl p-2'>
                <div className=' md:w-4/12'>
                <img src={image_url} alt="Album" className='h-full w-full rounded-md'/>
                </div>
                <div className='md:w-8/12'>
                <div className=" md:flex">
                    <div className='md:w-1/2 m-5'>
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <div className='flex my-1'>
                                <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                <FaStar className='mr-1' style={{color: '#ffb52f'}}></FaStar>
                                <FaStarHalfAlt style={{color: '#ffb52f'}}></FaStarHalfAlt>
                        </div>
                        </div>
                        <h3 className="text-lg  flex items-center"><FaMapMarkerAlt className='mr-1 text-[#0000FF]'/>Location: {location}</h3> 
                        <h2 className='opacity-75 my-3'>Owner Name: {ownerName}</h2>
                    </div>
                    <div className='md:w-1/2 m-5 text-center'>
                        <h3 className="text-lg border border-red-300 px-2 py-1 bg-red-50">Original Price: ${original_price}</h3>
                        <h3 className="text-lg border border-red-300 px-2 py-1 bg-red-50">Resale Price: ${resale_price}</h3>
                        <h4 className="border border-red-300 px-2 py-1 bg-red-50">Using Years: {using_year} Years</h4>
                    </div>
                </div>
                </div>
                <label className="btn btn-outline rounded-none mx-5 flex my-auto">Cancel</label>
            </div>
        </div>
    );
};

export default MyProductCard;