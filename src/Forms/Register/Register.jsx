import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const { state } = useLocation();
  const role = state?.role // Defaults to "student" if no role is passed
    console.log(role)
  const handleSigin = () =>{
    navigate("/auth/sign-in",{state:{role}})
  }



  const onSubmit = (data) => {
    console.log(data); // Add form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Input - Only for student */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("full_name", { required: "Full Name is required" })}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.full_name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.full_name && (
              <p className="mt-1 text-xs text-red-500">
                {errors.full_name.message}
              </p>
            )}
          </div>

          {/* Varsity ID Input - Only for student */}
          {role === "student" && (
            <div className="mb-4">
              <label
                htmlFor="varsity_id"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Varsity ID
              </label>
              <input
                type="text"
                id="varsity_id"
                {...register("varsity_id", {
                  required: "Varsity ID is required",
                  minLength: {
                    value: 8,
                    message: "Varsity ID must be exactly 8 characters",
                  },
                  maxLength: {
                    value: 8,
                    message: "Varsity ID must be exactly 8 characters",
                  },
                })}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.varsity_id ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your 8-character Varsity ID"
              />
              {errors.varsity_id && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.varsity_id.message}
                </p>
              )}
            </div>
          )}

          {/* Email Input - For both student and teacher */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: "Password is required" })}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 text-sm text-gray-600 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Register
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={handleSigin}
            className="font-medium text-blue-600 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
