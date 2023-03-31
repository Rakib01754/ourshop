import React from 'react';
import { Link } from 'react-router-dom';

const BrandsCard = ({ phoneBrand }) => {
    const { picture, brand, details, categoryId } = phoneBrand
    return (
        <div className="p-4 sm:mb-0 mb-6 border-2 border-gray-400 shadow-md">
            <div className="rounded-lg overflow-hidden border-b-2">
                <img alt="content" className="h-[150px] w-full" src={picture} />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-2">{brand}</h2>
            <p className="text-base leading-relaxed mt-2">{details ? details.slice(0, 180) : details}</p>
            <Link to={`/category/${categoryId}`} className="text-indigo-500 inline-flex items-center mt-3">See Phones
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </Link>
        </div>
    );
};

export default BrandsCard;