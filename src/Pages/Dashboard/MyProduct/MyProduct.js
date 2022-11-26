import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const {data: myProducts} = useQuery({
        queryKey: ["addAProduct", user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/addAProduct?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            {
                myProducts?.map(Product => <MyProductCard
                    key={Product._id}
                    product={Product}
                ></MyProductCard>)
            }
        </div>
    );
};

export default MyProduct;