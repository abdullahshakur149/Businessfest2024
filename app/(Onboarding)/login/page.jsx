"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import bflogo from "@/public/bflogo.png";
import { signIn } from "next-auth/react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import Link from 'next/link';

const Login = () => {
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const { email, password } = values;
                const res = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (res.ok) {
                    setSubmitting(true);
                    Toastify({
                        text: "Login successful!",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "center",
                        backgroundColor: "#4caf50",
                    }).showToast();

                    setTimeout(() => {
                        window.location.href = "/Dashboard"; // Replace with your target route
                    }, 5000);
                } else {
                    setSubmitting(false);
                    Toastify({
                        text: res.error || "Login failed",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "center",
                        backgroundColor: "#f44336",
                    }).showToast();
                }
            } catch (error) {
                Toastify({
                    text: "An unexpected error occurred.",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "#ff9800",
                }).showToast();
            } finally {
                setSubmitting(false);
                resetForm();
            }
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <Image src={bflogo} alt="BF Logo" width={100} height={100} />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>

                {/* Form */}
                <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                    {/* Email Field */}
                     {/* Email */}
                     <div className="relative mt-6">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`peer w-full px-4 py-4 border r  rounded-lg text-gray-700 placeholder-transparent focus:outline-none transition-all ${
                                formik.errors.email && formik.touched.email
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-purple-500'
                            }`}
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 -top-2.5 px-1 peer-focus:bg-white rounded-3xl text-black text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Email
                        </label>
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="relative mt-6">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className={`peer w-full px-4 py-4 border  rounded-lg text-gray-700 placeholder-transparent focus:outline-none transition-all ${
                                formik.errors.password && formik.touched.password
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-purple-500'
                            }`}
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-4 -top-2.5 px-1 peer-focus:bg-white rounded-3xl text-black text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Password
                        </label>
                        {formik.errors.password && formik.touched.password && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-6 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? "Logging in..." : "Log In"}
                    </button>

                    {/* Sign-up Link */}
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don’t have an account? <Link href="/signup" className="text-purple-600 font-medium">Create Now</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
