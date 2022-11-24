import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const {loginUser, signInGoogle} = useContext(AuthContext);
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [loginError, setLoginError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = (data) =>{
        setLoginError('');
        loginUser(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
            })
            .catch(err =>{
                console.error(err.message);
                setLoginError(err.message)
            })
    }

    const handleSignInGoogle = () =>{
        signInGoogle(googleProvider)
            .then( result =>{
                const user = result.user;
                console.log(user);
            })
            .catch((err) =>{
                setLoginError(err.message);
            })
    }

    
    return (
        <div className='md:h-[700px] flex justify-center items-center'>
            <div className='shadow-xl bg-base-100 lg:w-2/4 p-6 rounded-xl'>
                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="text-3xl text-center mb-7">Login</div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", 
                    {required: 'Email is required'}
                    
                    )} type="email" placeholder="email" className="input input-bordered w-full" />
                    {errors.email && <small role="alert" className=' text-red-600'>{errors.email?.message}</small>}

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password",
                    {
                        required: 'password is required', 
                        minLength : {value: 6, message: 'Password must be 6 characters or longer'}
                    }

                    )} type="password" placeholder="password" className="input input-bordered w-full" />
                    <Link><small>Forget password ?</small></Link>
                    <br />
                    {errors.password && <small role="alert" className=' text-red-600'>{errors.password?.message}</small>}

                    <button type='submit' className="btn btn-active w-full my-3 uppercase">Login</button>
                </form>
                {loginError && <p className='text-red-600'>{loginError}</p> }
                <div className='text-center'>
                    <small>New to The Bike Rack? <Link to='/signup' className='text-success'>Create new account</Link></small>
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

export default Login;