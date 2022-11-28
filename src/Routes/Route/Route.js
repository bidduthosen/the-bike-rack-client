import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import ReportAdmin from "../../Pages/Dashboard/ReportAdmin/ReportAdmin";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'products/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/allproducts/${params.id}`)
            },
            
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/reportAdmin',
                element: <AdminRoute><ReportAdmin></ReportAdmin></AdminRoute>
            }
        ]
    }
])

export default router;