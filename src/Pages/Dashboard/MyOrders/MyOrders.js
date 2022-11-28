import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [orderDelete, setOrderDelete] = useState(null);

    const {data: MyOrders, refetch} = useQuery({
        queryKey: [user?.email],
        queryFn: async()=> {
            const res = await fetch(`https://the-bike-rack-server.vercel.app/bookings?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    });


    const closeModal = () =>{
        setOrderDelete(null);
    }

    const handleProductDelete = product =>{
        fetch(`https://the-bike-rack-server.vercel.app/bookings/${product?._id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                toast.success(`${orderDelete.title} Order Cancel done`);
                refetch()
            }
        })
    }
    return (
        <div className='w-[92%] mx-auto'>
            <div className='flex justify-between items-center'>
            <h2 className="text-2xl font-semibold border-b-4 border-gray-500 my-7 p-4 md:w-3/12 mx-auto text-center">My Orders</h2>
            </div>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>User info</th>
                    <th>Products Details</th>
                    <th>Date & location</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className='my-6'>
                    {
                        MyOrders?.map((order, i) => <MyOrderCard
                        key={order._id}
                        index={i}
                        MyOrder={order}
                        setOrderDelete={setOrderDelete}
                        ></MyOrderCard>)
                    }
                </tbody>
            </table>
            </div>
            {
                orderDelete && 
                <ConfirmationModal
                    title={`Are you sure you want to delete ${orderDelete?.title} ?`}
                    message ={`If you delete ${orderDelete?.name} . It cannot be undone.`}
                    modalData={orderDelete}
                    closeModal={closeModal}
                    handleProductDelete={handleProductDelete}
                    deleteButtonName="Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;