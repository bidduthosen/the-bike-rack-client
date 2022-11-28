import React from 'react';
import { Link } from 'react-router-dom';

const BikeBrands = () => {
    return (
        <div className='my-20'>
            <h1 className="text-3xl font-semibold mb-12">More Bike Brand Template </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-2'>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/aprilia.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">Aprilia</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/Atlas-Zongshen.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">Atlas Zongshen</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/bajaj.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">Bajaj</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/honda.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">Honda</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/hero.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">Hiro</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/ktm.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">KTM</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/royal-enfield.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">Royal enfield</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
                <div className='shadow-md shadow-stone-400 rounded-lg flex justify-center text-center py-4 hover:bg-lime-100' >
                    <div>
                        <img src="https://www.motorcyclevalley.com/images/brands/logo/gpx.webp" className='h-40 w-46 rounded-lg' alt="" />
                        <h1 className="text-md">GPX</h1>
                        <Link className="link link-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeBrands;