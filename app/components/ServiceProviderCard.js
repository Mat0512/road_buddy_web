import React from "react";
import { useRouter } from "next/router"; // Using Next.js router instead of react-router-dom

const ServiceProviderCard = ({ name, id }) => {
    const router = useRouter(); // Hook to navigate programmatically

    // Function to handle view button click
    const handleViewClick = () => {
        // Navigate to a dynamic route based on the id
        router.push(`/service-provider/${id}`);
    };

    return (
        <div className="flex bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 min-h-screen">
            <div className="w-full overflow-hidden rounded-t-lg">
                <img
                    src={`/sp1.jpg`} // Placeholder image path
                    alt="Service Provider"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">{name || "Service Provider"}</h2>
                <button
                    className="mt-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    onClick={handleViewClick}
                >
                    View
                </button>
            </div>
        </div>
    );
};

export default ServiceProviderCard;
