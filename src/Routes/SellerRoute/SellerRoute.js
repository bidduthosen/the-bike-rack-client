import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const [isSeller, isSellerLoader] = useSeller(user?.email);
    const location = useLocation();
    if(loader || isSellerLoader){
        return <Loading></Loading>
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;