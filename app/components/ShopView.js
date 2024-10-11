import React from "react";

const ShopView = ({ name, image, rating, services }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4 mt-2">
            {/* Shop Image */}
            {image ? (
                <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
            ) : (
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <p className="text-gray-500">No Image Available</p>
                </div>
            )}

            {/* Shop Name */}
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>

            {/* Rating */}
            <div className="flex items-center mb-2">
                <p className="text-yellow-500 font-bold text-lg">{rating}</p>
                <span className="ml-1 text-sm text-gray-600">/ 5</span>
            </div>

            {/* Services Offered */}
            <div className="mt-2">
                <h3 className="text-lg font-medium">Services Offered:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-1">
                    {services.length > 0 ? (
                        services.map((service, index) => (
                            <li key={index} className="text-sm">
                                {service}
                            </li>
                        ))
                    ) : (
                        <li className="text-sm text-gray-500">No services listed</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ShopView;
