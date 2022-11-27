import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const {data: MyOrders} = useQuery({
        queryKey: [user?.email],
        queryFn: async()=> {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='w-[92%] mx-auto'>
            <div className='flex justify-between items-center'>
            <h2 className="text-2xl font-semibold border-b-4 border-gray-500 my-7 p-4 md:w-3/12 ">My Orders</h2>
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
                        ></MyOrderCard>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyOrders;