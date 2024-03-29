import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { name, picture, price, ram, rom, _id } = product
    return (
        <div>


            <div className="bg-white shadow-md rounded-lg m-5 md:m-2 lg:m-2">
                <img className="rounded-t-lg p-8" src={picture} alt={name} />

                <div className="px-5 pb-5">
                    <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{name}</h3>
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{ram}</span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rom}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">{price} BDT</span>
                        <Link to={`/product/${_id}`}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;