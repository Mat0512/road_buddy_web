// components/Signup.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "../utils/axios";

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
    type: Yup.string().oneOf(["driver"], "Invalid user type").required("User type is required"),
    license_number: Yup.string().required("License number is required"),
    vehicle: Yup.string().required("Vehicle is required"),
    profile_picture: Yup.string().required("Profile picture is required"),
});

const SignupUser = () => {
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
        <div className="max-w-md w-full mx-auto px-4 py-6 bg-white">
            <div className="m-auto flex justify-center h-[180px] w-[180px] items-center">
                <img src="/gtlogo.jpg" alt="Logo" />
            </div>
            <h2 className="text-3xl mb-4">User Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        className={`w-full bg-gray-200 border p-2 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className={`w-full bg-gray-200 border p-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Phone</label>
                    <input
                        type="text"
                        {...register("phone")}
                        className={`w-full bg-gray-200 border p-2 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        {...register("password")}
                        className={`w-full bg-gray-200 border p-2 ${errors.password ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Confirm Password</label>
                    <input
                        type="password"
                        {...register("password_confirmation")}
                        className={`w-full bg-gray-200 border p-2 ${
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
                        className={`w-full bg-gray-200 border p-2 ${errors.username ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">User Type</label>
                    <select
                        {...register("type")}
                        className={`w-full bg-gray-200 border p-2 ${errors.type ? "border-red-500" : "border-gray-300"}`}
                    >
                        <option value="driver">Driver</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">License Number</label>
                    <input
                        type="text"
                        {...register("license_number")}
                        className={`w-full bg-gray-200 border p-2 ${
                            errors.license_number ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.license_number && <p className="text-red-500 text-sm">{errors.license_number.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Vehicle</label>
                    <input
                        type="text"
                        {...register("vehicle")}
                        className={`w-full bg-gray-200 border p-2 ${errors.vehicle ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.vehicle && <p className="text-red-500 text-sm">{errors.vehicle.message}</p>}
                </div>

                <div>
                    <label className="block mb-1">Profile Picture (Base64)</label>
                    <textarea
                        {...register("profile_picture")}
                        className={`w-full bg-gray-200 border p-2 ${
                            errors.profile_picture ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.profile_picture && <p className="text-red-500 text-sm">{errors.profile_picture.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupUser;
