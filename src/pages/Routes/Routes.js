import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main';
import AllProducts from '../AllProducts';
import ErrorPage from '../ErrorPage';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import ProductDetails from '../ProductDetails';
import SpecificProducts from '../SpecificProducts';
import PrivateRoute from '../PrivateRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'allproducts',
                    element: <PrivateRoute><AllProducts /></PrivateRoute>,
                    loader: () => fetch('http://localhost:5000/products')
                },
                {
                    path: 'product/:id',
                    loader: ({ params }) =>
                        fetch(`http://localhost:5000/product/${params.id}`),
                    element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
                },
                {
                    path: 'category/:id',
                    loader: ({ params }) =>
                        fetch(`http://localhost:5000/category/${params.id}`),
                    element: <PrivateRoute><SpecificProducts></SpecificProducts></PrivateRoute>
                },


            ]
        }
    ])


    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;