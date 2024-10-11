"use client"; // Since we're using hooks, it's a client-side component
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Define validation schema using Yup
const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
    const queryClient = useQueryClient();
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // Mutation to handle login
    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post("/api/login", data);
            return response.data;
        },
        onError: (error) => {
            setErrorMessage(error.response?.data?.message || "Login failed");
        },
        onSuccess: (data) => {
            // Optionally refetch or update queries
            queryClient.invalidateQueries(["user"]);
            setErrorMessage(""); // Clear error message on success
            // Redirect user or perform post-login logic here
        },
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-white">
            {/* Logo */}

            <div className="flex justify-center h-[180px] w-[180px] items-center">
                <img src="/gtlogo.jpg" alt="Logo" />
            </div>
            <div className="w-full max-w-sm bg-white rounded-lg p-6 flex justify-center items-center flex-col">
                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full mb-9">
                    {/* Email Input */}
                    <p class="text-4xl font-bold">Login</p>
                    <div>
                        <label htmlFor="email" className="block text-xl font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`bg-gray-200 block w-full p-3 border rounded-md ${
                                errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500 text-md mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-xl font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`bg-gray-200 block w-full p-3 border rounded-md ${
                                errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Error message */}
                    {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        disabled={mutation.isLoading}
                    >
                        {mutation.isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div class="signup-section">
                    <p>
                        New to Gas N Tire?{" "}
                        <a href="/auth/signup" class="signup-btn text-blue-700">
                            Sign Up Here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
