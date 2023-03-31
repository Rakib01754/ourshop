import axios from 'axios';
import React, { useState } from 'react';
import BrandsCard from './BrandsCard';

const Brands = () => {
    const [phoneBrands, setPhoneBrands] = useState([]);

    const url = "https://server-seven-kappa-72.vercel.app/brands"

    axios.get(url)
        .then(response => {
            const brands = response.data;
            setPhoneBrands(brands)
        })
        .catch(error => (console.log(error)))


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-2 sm:mb-0">Available Brands In Our Shop</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">We provide the best service to the customer. That's why people trust us, love us. We deliver the best quality phones to the customer what they want. </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {
                        phoneBrands.map(phoneBrand =>
                            <BrandsCard key={phoneBrand._id} phoneBrand={phoneBrand}></BrandsCard>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default Brands;