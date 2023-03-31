import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = ({ aditem }) => {
    const { name, picture, price } = aditem
    return (
        <div class="flex flex-shrink-0 relative w-full sm:w-auto">
            <img src={picture} alt={name} className="w-full" />
            <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">{price} BDT</h2>
                <div class="flex h-full items-end pb-6 justify-between">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">{name}</h3>
                    <Link to="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</Link>
                </div>

            </div>
        </div>
    );
};

export default CarouselItem;