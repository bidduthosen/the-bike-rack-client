import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const productsData = useLoaderData();
    const [products, setProducts]= useState(null);
    return (
        <div className='my-8'>
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