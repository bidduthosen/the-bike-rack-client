import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100">
                   <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-60 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    {
                        isSeller && <>
                            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/myProduct'>My Products</Link></li>
                        </>
                    }
                    
                    {
                        isAdmin && <>
                            <li><Link to='/dashboard/reportAdmin'>Report to Admin</Link></li>
                            <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                        </>
                    }
                    </ul>
                
                </div>
                </div>
        </div>
    );
};

export default DashboardLayout;