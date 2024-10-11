import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosInstance from "@/utils/axios"; // Import the custom axios instance
import { useQuery, useMutation } from "react-query";

// Define the validation schema with Yup
const schema = Yup.object().shape({
    location_lat: Yup.number().required("Location Latitude is required").typeError("Location Latitude must be a number"),
    location_lng: Yup.number().required("Location Longitude is required").typeError("Location Longitude must be a number"),
});

const ServiceRequestForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // useMutation to handle form submission
    const mutation = useMutation(
        (requestData) => axiosInstance.post("/service-requests", requestData) // Replace with your actual endpoint
    );

    const onSubmit = async (data) => {
        const requestData = {
            user_id: 1, // Assuming user_id is static
            provider_id: 10, // Assuming provider_id is static
            service_id: 1, // Assuming service_id is static
            status: "pending", // Static status
            location_lat: parseFloat(data.location_lat),
            location_lng: parseFloat(data.location_lng),
        };

        mutation.mutate(requestData);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create Service Request</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location Latitude:</label>
                    <input
                        type="number"
                        step="any"
                        {...register("location_lat")}
                        className={`mt-1 block w-full border rounded-md p-2 ${
                            errors.location_lat ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.location_lat && <p className="text-red-500">{errors.location_lat.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location Longitude:</label>
                    <input
                        type="number"
                        step="any"
                        {...register("location_lng")}
                        className={`mt-1 block w-full border rounded-md p-2 ${
                            errors.location_lng ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.location_lng && <p className="text-red-500">{errors.location_lng.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Submit Request
                </button>
            </form>
            {mutation.isLoading && <p className="text-gray-500">Submitting...</p>}
            {mutation.isError && <p className="text-red-500">Error: {mutation.error.message}</p>}
            {mutation.isSuccess && <p className="text-green-500">Service request created successfully!</p>}
        </div>
    );
};

export default ServiceRequestForm;
