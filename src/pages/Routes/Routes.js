import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main';
import AllProducts from '../AllProducts';
import ErrorPage from '../ErrorPage';
import Home from '../Home';
import Login from '../Login';

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
                    path: 'allproducts',
                    element: <AllProducts />
                }

            ]
        }
    ])


    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;