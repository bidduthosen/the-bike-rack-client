import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {categoryId, categoryName, categoryImg} = category;
    return (
        <Link to={`/products/${categoryId}`}>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={categoryImg} alt="Shoes" className='w-[100%]' /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">More Now</button>
                
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Category;