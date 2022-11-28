import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import errorImg from '../../../assets/errorDisplay/error.gif'

const DisplayError = () => {
    const  error = useRouteError();
    const navigate = useNavigate();
    const {logoutUser} = useContext(AuthContext);


    const handleDisplayLogOut = () =>{
        logoutUser()
            .then(()=>{
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center h-full my-auto mt-12 text-center'>
            <div className='text-center'>
                <img src={errorImg} className="h-40 w-46 mx-auto" alt="" />
                <p className='text-red-500'>Something Wrong</p>
                <p className='text-red-300'>{error.statusText || error.message}</p>
                <h1>Please <Link className='link link-primary' onClick={handleDisplayLogOut} to='login'>Log Out</Link> and Login back</h1>
            </div>
        </div>
    );
};

export default DisplayError;