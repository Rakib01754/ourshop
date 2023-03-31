import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';

const HomeProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://server-seven-kappa-72.vercel.app/productssample")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);
    return (
        <section className="text-gray-600 body-font mt-4">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-2 sm:mb-0">Products</h1>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
                    {
                        products.map(product =>
                            <SingleProduct key={product._id} product={product}></SingleProduct>
                        )
                    }

                </div>
                <div className='flex justify-center'>
                    <Link to="/allproducts"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See All Products</Link>
                </div>
            </div>
        </section>
    );
};

export default HomeProducts;