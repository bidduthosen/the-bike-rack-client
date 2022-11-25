import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from '../Category/Category';

const Categories = () => {

    const {data: categories = []} = useQuery({
        queryKey: ["categories"],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div  className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-8'>
            {
                categories?.map(category => <Category
                key={category.categoryId}
                category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;