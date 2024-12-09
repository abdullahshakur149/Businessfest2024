"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import bflogo from "@/public/bflogo.png";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import axios from 'axios';
import Link from 'next/link';

const SignUp = () => {
    // Validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/\d/, 'Password must contain at least one number')
            .matches(/[\W_]/, 'Password must contain at least one special character')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
                const response = await axios.post(`${baseURL}/auth/signup/`, values);
                if (response.data.success) {
                    Toastify({
                        text: "Sign-up successful!",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "right",
                        backgroundColor: "#4CAF50",
                    }).showToast();

                    setTimeout(() => {
                        window.location.href = "/login"; 
                    }, 5000);
                }
            } catch (error) {
                Toastify({
                    text: "An unexpected error occurred.",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#FF6347",
                }).showToast();
            } finally {
                setSubmitting(false);
                resetForm();
            }
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen  ">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {/* Logo at the top */}
                <div className="flex justify-center mb-6">
                    <Image src={bflogo} alt="BF Logo" width={100} height={50} />
                </div>

                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Welcome to Business Fest</h2>

                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    {/* Username */}
                    <div className="relative mt-6">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className={`peer w-full px-4 py-4 border  rounded-lg text-gray-700 placeholder-transparent focus:outline-none transition-all ${
                                formik.errors.username && formik.touched.username
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-purple-500'
                            }`}
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-4 -top-2.5 px-1 peer-focus:bg-white rounded-3xl text-black text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                            Username
                        </label>
                        {formik.errors.username && formik.touched.username && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
                        )}
                    </div>

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
                            className={`peer w-full px-4 py-4 border rounded-lg text-gray-700 placeholder-transparent focus:outline-none transition-all ${
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

                    {/* Password */}
                    <div className="relative mt-6">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className={`peer w-full px-4 py-4 border rounded-lg text-gray-700 placeholder-transparent focus:outline-none transition-all ${
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
                        {formik.isSubmitting ? "Signing up..." : "Sign Up"}
                    </button>
                </form>

                {/* Create Account Link */}
                
            </div>
        </div>
    );
}

export default SignUp;
