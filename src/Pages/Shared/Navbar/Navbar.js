import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOutUser = () =>{
        logoutUser()
            .then(()=>{
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {
            user ? 
            <li><Link onClick={handleLogOutUser} to='login' className='btn-error text-white font-bold rounded-3xl'>Log Out</Link></li>
            :
            <li><Link to='login' className='btn-info rounded-3xl'>Login</Link></li>
        }
        {
            user &&
            <>
                {
                    user?.photoURL ? 
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder online">
                                <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>{user?.displayName}</Link></li>
                                <li><Link>Account Information</Link></li>
                            </ul>
                        </div>
                    </>
                    :
                        <>
                            <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="avatar placeholder online">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                    <FaUserAlt></FaUserAlt>
                                </div>
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link>{user?.displayName}</Link></li>
                                <li><Link>Account Information</Link></li>
                            </ul>
                        </div>
                        </>
                }
            </>
            
        }
        
    </React.Fragment>
    
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link className='btn btn-ghost normal-case text-4xl'>The Bike Rack</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
                <label htmlFor="dashboard-drawer" tabIndex={1} className="drawer-button lg:hidden p-3"><img src='https://i.ibb.co/yhVH8Sc/dashboard-speed-icon-icons-com-49837.png' alt='' className='h-12 w-12 rounded-3xl m-2  hover:bg-red-500'></img> </label>
        </div>
    );
};

export default Navbar;