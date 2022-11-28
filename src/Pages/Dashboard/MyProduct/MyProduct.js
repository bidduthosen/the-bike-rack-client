import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductCard from './MyProductCard';
import MyProductModal from './MyProductModal/MyProductModal';

const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const [deleteMyProduct, setDeleteMyProduct] = useState(null);


    const {data: myProducts, isLoading, refetch} = useQuery({
        queryKey: ["addAProduct", user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://the-bike-rack-server.vercel.app/addAProduct?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }

    const closeModal = ()=> {
        setDeleteMyProduct(null);
    };
    const handleDeleteMyProduct = myProduct =>{
        fetch(`https://the-bike-rack-server.vercel.app/addAProduct/${myProduct?._id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                toast.success(`${deleteMyProduct.title} Order Cancel done`);
                refetch()
            }
        })
    }
    return (
        <div>
            <div>
            <h2 className="text-2xl font-semibold border-b-4 border-gray-500 mt-9 mb-12 p-4 md:w-3/12 mx-auto text-center">My Products</h2>
            {
                myProducts?.map(Product => <MyProductCard
                    key={Product._id}
                    product={Product}
                    setDeleteMyProduct={setDeleteMyProduct}
                ></MyProductCard>)
            }
            </div>
            {
                deleteMyProduct && 
                <MyProductModal
                    title={`Are you sure you want to delete ${deleteMyProduct?.title} ?`}
                    message ={`If you delete ${deleteMyProduct?.ownerName} . It cannot be undone.`}
                    closeModal={closeModal}
                    modalData ={deleteMyProduct}
                    handleDeleteMyProduct={handleDeleteMyProduct}
                    deleteButtonName="Delete"
                ></MyProductModal>
            }
        </div>
    );
};

export default MyProduct;