"use client";

import React from "react";
import ShopView from "@/app/components/ShopView";
import ServiceCard from "@/app/components/ServiceCard"; // Import the ServiceCard component
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/app/utils/axios";
// Placeholder function simulating API call
const shopInfo = {
    name: "Super Shop",
    image: "https://via.placeholder.com/150", // Placeholder image
    rating: 4.5,
    services: ["Grocery", "Electronics", "Clothing", "Home Essentials"],
};

const ExamplePage = () => {
    // const { data, isLoading, error } = useQuery("shopInfo", fetchShopInfo);

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    // const shopInfo = data || {}; // Fallback in case `data` is undefined

    const handleAvailService = (service) => {
        alert(`You have availed the service: ${service}`);
    };

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <ShopView name={shopInfo.name} image={shopInfo.image} rating={shopInfo.rating} services={shopInfo.services} />
            <div className="flex flex-wrap justify-center mt-4">
                {shopInfo.services.map((service, index) => (
                    <div className="w-[50%]">
                        <ServiceCard key={index} serviceName={service} onAvail={() => handleAvailService(service)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamplePage;
