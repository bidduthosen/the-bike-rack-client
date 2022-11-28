import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReportAdminCard = ({reportProduct}) => {
    const {title, image_url, location, original_price, resale_price, using_year, ownerName, publishDate, choiceOption} = reportProduct;
    return (
        <div className="hero my-8">
                <div className="hero-content grid lg:grid-cols-3 shadow-xl bg-base-100 w-full mx-4">
                    <div className='flex mx-auto'>
                        <img src={image_url} className="h-[200px] w-full" alt=''/>
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
                                <div className=" flex justify-start items-center">
                                    <h2 className='my-1 mr-1 text-md' >Owner: <span className='font-bold text-md uppercase'>{ownerName}</span></h2>
                                    <BsFillPatchCheckFill style={{color:'#1D1CE5'}}></BsFillPatchCheckFill>
                                </div>
                                <h3 className="text-md flex items-center"><FaMapMarkerAlt className='mr-1 text-[#0000FF]'/>Location: {location}</h3>
                                <h3 className="text-md flex items-center"><img src='https://i.ibb.co/y8qY5TQ/status.png' className='h-4 w-4 mr-1' alt=''></img> Status: {choiceOption}</h3>
                                
                            </div>
                            <div className='text-center'>
                                
                                <h3 className="text-lg border border-red-300 px-8 py-2 bg-red-50">Original Price: ${original_price}</h3>
                                <h3 className="text-lg border border-red-300 px-8 py-2 bg-red-50">Resale Price: ${resale_price}</h3>
                                <h4 className="px-8 py-2">Using Years: {using_year} Years</h4>
                                <div className=" w-full text-medium">last update: {publishDate}</div>
                            </div> 

                        </div>
                            <label className="btn btn-outline rounded-none my-5 mr-2">delete Products</label>
                    </div>
                </div>
            </div>
    );
};

export default ReportAdminCard;