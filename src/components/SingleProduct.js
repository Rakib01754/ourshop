import React from 'react';

const SingleProduct = ({ product }) => {
    const { name, brand, picture, price, ram, rom } = product
    return (
        <div>


            <div class="bg-white shadow-md rounded-lg m-5 md:m-2 lg:m-2 dark:bg-gray-800 dark:border-gray-700">
                <img class="rounded-t-lg p-8" src={picture} alt={name} />

                <div class="px-5 pb-5">
                    <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{name}</h3>
                    <div class="flex items-center mt-2.5 mb-5">
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{ram}</span>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rom}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-gray-900 dark:text-white">{price} BDT</span>
                        <a href="#"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;