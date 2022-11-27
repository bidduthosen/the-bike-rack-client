import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductCard from './MyProductCard';
import MyProductModal from './MyProductModal/MyProductModal';

const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const [deleteMyProduct, setDeleteMyProduct] = useState(null);
    const {data: myProducts} = useQuery({
        queryKey: ["addAProduct", user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/addAProduct?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    });

    const closeModal = ()=> {
        setDeleteMyProduct(null);
    }
    return (
        <div>
            <div>
            <h2 className="text-2xl font-semibold border-b-4 border-gray-500 mt-9 mb-12 p-4 md:w-3/12 mx-auto text-center">My Products</h2>
            {
                myProducts?.map(Product => <MyProductCard
                    key={Product._id}
                    product={Product}
                ></MyProductCard>)
            }
            </div>
            {
                deleteMyProduct && 
                <MyProductModal
                closeModal={closeModal}
                ></MyProductModal>
            }
        </div>
    );
};

export default MyProduct;