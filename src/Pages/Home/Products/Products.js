import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const productsData = useLoaderData();
    const [products, setProducts]= useState(null);
    return (
        <div className='my-8'>
            <h2 className="text-3xl font-semibold border-b-4 border-gray-500 my-5 p-4 md:w-3/12 text-center mx-auto mb-9">Category Bike list</h2>
            <div>
            {
                productsData.map(product => <ProductCard
                key={product._id}
                product={product}
                setProducts={setProducts}
                ></ProductCard>)
            }
            </div>
            {
                products &&
                <BookingModal
                products={products}
                setProducts={setProducts}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;