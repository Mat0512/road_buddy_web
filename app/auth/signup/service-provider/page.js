// components/SignupSp.js

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
    username: Yup.string().required("Username is required"),
    type: Yup.string().oneOf(["service_provider"], "Invalid user type").required("User type is required"),
    contact_info: Yup.string().required("Contact info is required"),
    location_lat: Yup.number().required("Latitude is required"),
    location_lng: Yup.number().required("Longitude is required"),
});

const SignupSp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("https://your-api-url.com/api/signup", data);
            alert(response.data.message);
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl mb-4">Sign Up as a Service Provider</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        className={`w-full border p-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className={`w-full border p-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Phone</label>
                    <input
                        type="text"
                        {...register("phone")}
                        className={`w-full border p-2 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        {...register("password")}
                        className={`w-full border p-2 ${errors.password ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Confirm Password</label>
                    <input
                        type="password"
                        {...register("password_confirmation")}
                        className={`w-full border p-2 ${
                            errors.password_confirmation ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.password_confirmation && (
                        <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1">Username</label>
                    <input
                        type="text"
                        {...register("username")}
                        className={`w-full border p-2 ${errors.username ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">User Type</label>
                    <select
                        {...register("type")}
                        className={`w-full border p-2 ${errors.type ? "border-red-500" : "border-gray-300"}`}
                    >
                        <option value="service_provider">Service Provider</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Contact Info</label>
                    <input
                        type="text"
                        {...register("contact_info")}
                        className={`w-full border p-2 ${errors.contact_info ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.contact_info && <p className="text-red-500 text-sm">{errors.contact_info.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Location Latitude</label>
                    <input
                        type="number"
                        step="any"
                        {...register("location_lat")}
                        className={`w-full border p-2 ${errors.location_lat ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.location_lat && <p className="text-red-500 text-sm">{errors.location_lat.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Location Longitude</label>
                    <input
                        type="number"
                        step="any"
                        {...register("location_lng")}
                        className={`w-full border p-2 ${errors.location_lng ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.location_lng && <p className="text-red-500 text-sm">{errors.location_lng.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupSp;
