import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn : ()=> fetch('http://localhost:5000/users')
            .then(res => res.json())
    });

    const handleAdminRole = id => {
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success('Make admin successful.');
                    refetch()
                }
            })
    };

    const handleDeleteUser = (id) =>{
       fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
            if(data.deletedCount > 0){
                toast.success('Delete Successful');
                refetch();
            }
       })
    }
    return (
        <div className='w-[92%] mx-auto my-6'>
            <h2 className="text-2xl font-semibold border-b-4 border-gray-500 mb-7 p-4 md:w-3/12 mx-auto text-center">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin Role</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allUsers.map((user, i)=> <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user?.name}
                            <br />
                            <span className="badge badge-ghost badge-sm">isUser: {user?.isUser}</span>
                            </td>
                            <td>{user?.email}</td>
                            <td>{
                                user?.role !== 'admin' ? 
                                <button onClick={()=>handleAdminRole(user._id)} className="btn btn-sm btn-info">Make Admin</button>
                                :
                                <button className="btn btn-outline btn-sm btn-success">Admin</button>
                            }</td>
                            <td><button onClick={()=>handleDeleteUser(user?._id)} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUsers;