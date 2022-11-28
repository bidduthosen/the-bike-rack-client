import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const  {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser, signInGoogle , updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = data =>{
        // console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                const userinfo ={
                    displayName: data.name,
                }
                updateUser(userinfo)
                .then(()=>{
                    savedUser(data)
                })
                .catch((err)=> {
                    console.log(err)
                    setSignUpError(err.message)
                })
            })
            .catch(err => console.error(err))

        const savedUser = (data) =>{
            const users = {
                isUser : data.option,
                name: data.name,
                email: data.email
            }
            fetch('https://the-bike-rack-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(users)
            })
            .then(res => res.json())
            .then(data => {
                    toast.success('Create User successfully,.');
                    // setCreatedUserEmail(data.email)
                    setCreatedUserEmail(users.email)
                    
            })

        }
    };


    // const getUserToken = email =>{
    //     console.log(email)
    //     fetch(`https://the-bike-rack-server.vercel.app/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken)
    //             navigate('/')
    //         }
    //         console.log(data)
    //     })
    // }

    const handleSignInGoogle = () =>{
        signInGoogle(googleProvider)
            .then( result =>{
                const user = result.user;
                console.log(user);
            })
            .catch((err) =>{
                setSignUpError(err.message);
            })
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='shadow-xl bg-base-100 lg:w-2/4 p-6 rounded-xl'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="text-3xl text-center mb-7">SignUp</div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register('name',{ required: 'Please give me your name?'})} type="text" placeholder="Name" className="input input-bordered w-full mb-3" />
                    {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}

                    <span className="label-text py-2">Options</span>
                    <select {...register("option", { required: 'Please give me your options?'})} className="select select-bordered mb-3 w-full">
                        <option>Seller</option>
                        <option>Buyer</option>
                    </select>

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register('email', { required: 'email is required'})} type="email" placeholder="email" className="input input-bordered w-full" />
                    {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register('password', {
                        required: 'password is required?',
                        minLength: {value: 6, message: 'password must be 6 character?'}
                        })} type="password" placeholder="password" className="input input-bordered w-full" />
                    
                    {/* error message password  */}
                    {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    <button type='submit' className="btn btn-active w-full my-3 uppercase">signup</button>
                </form>
                {signUpError && <p className='text-red-600'>{signUpError} </p> }
                <div className='text-center'>
                    <small>Already have a account please! <Link to='/login' className='text-success'>login</Link></small>
                </div>
                <div className="divider">OR</div>
                <div className='flex justify-center items-center'>
                    <FaGoogle onClick={handleSignInGoogle} style={{fontSize: '25px', margin: '15px'}}></FaGoogle>
                    <FaFacebook style={{fontSize: '25px', margin: '15px'}}></FaFacebook>
                    <FaGithub style={{fontSize: '25px', margin: '15px'}}></FaGithub>
                </div>
            </div>
        </div>
    );
};

export default SignUp;