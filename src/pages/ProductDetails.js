import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData()
    const { picture, brand, name, ram, rom, details, price, colors, network, size, resolution, battery, madeIn } = product
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-10 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded" src={picture} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{brand}</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                        <div class="flex mb-4">
                            <p className='font-bold text-lg'>Made In: {madeIn}</p>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <span className='font-bold text-gray-500'>
                                    Ram: {ram}
                                </span>
                                <span className='font-bold text-gray-500 ml-4'>
                                    Rom: {rom}
                                </span>
                            </span>
                        </div>
                        <div className='my-4'>
                            <p className='font-bold'>Display: {size}.</p>
                            <p className='font-bold'>Colors: {colors}.</p>
                            <p className='font-bold'>Network: {network}.</p>
                            <p className='font-bold'>Resoulation: {resolution}.</p>
                            <p className='font-bold'>Battery: {battery}.</p>
                        </div>
                        <p class="leading-relaxed">{details}</p>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">Price: {price} BDT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;