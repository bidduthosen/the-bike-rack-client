import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../components/Loading/Loading';
import Category from '../Category/Category';

const Categories = () => {

    const {data: categories = [], isLoading} = useQuery({
        queryKey: ["categories"],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-20 mx-2'>
            <h1 className="text-3xl font-semibold">Top Categories Bike Brand</h1>
            <div  className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-12'>
            {
                categories?.map(category => <Category
                key={category.categoryId}
                category={category}
                ></Category>)
            }
        </div>
        </div>
    );
};

export default Categories;