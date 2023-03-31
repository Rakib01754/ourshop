import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';

const SpecificProducts = () => {
    const products = useLoaderData()
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8 border-b-2'>Total Products: {products.length}</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default SpecificProducts;