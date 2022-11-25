import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='my-8'>
            {
                products.map(product => <ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Products;