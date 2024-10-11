"use client";

import React from "react";
import { useRouter } from "next/navigation";
const serviceProviders = [
    { id: 1, name: "Provider One", description: "Description for provider one.", image: "/sp1.jpg" },
    { id: 2, name: "Provider Two", description: "Description for provider two.", image: "/sp2.jpg" },
    { id: 3, name: "Provider Three", description: "Description for provider three.", image: "/sp1.jpg" },
];

const WelcomeUser = () => {
    const router = useRouter(); // Hook to navigate programmatically

    // Function to handle view button click
    const handleViewClick = (id) => {
        // Navigate to a dynamic route based on the id
        router.push(`/service-provider/${id}`);
    };
    return (
        <section className="p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Welcome, User!</h1>
            <h2 className="text-lg font-semibold mb-2">Service Providers:</h2>
            <ul className="list-none p-0">
                {serviceProviders.map((provider) => (
                    <li key={provider.id} className="flex gap-3 my-4 p-4 border border-gray-300 rounded-md shadow-md">
                        <div className="w-full h-[132px] flex items-center justify-center">
                            <img
                                className="h-full w-full object-cover"
                                src={provider.image}
                                alt={`Image of ${provider.name}`}
                            />
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <h3 className="text-xl font-semibold">{provider.name}</h3>
                            <p className="text-gray-600">{provider.description}</p>

                            <button
                                className="p-2 rounded-md bg-blue-800 text-white"
                                onClick={() => handleViewClick(provider.id)}
                            >
                                Visit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default WelcomeUser;
