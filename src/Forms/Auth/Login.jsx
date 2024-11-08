import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const { state } = useLocation();
  const role = state?.role || "student";
  console.log(role) // Default to "student" if no role passed

  const handleSignUp = () =>{
    navigate('/auth/sign-up',{state:{role}})
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Sign In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Conditional ID/Email Input */}
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              {role === "teacher" ? "Email" : "ID"}
            </label>
            <input
              type={role === "teacher" ? "email" : "text"}
              id="id"
              {...register("id", {
                required: `${role === "teacher" ? "Email" : "ID"} is required`,
                ...(role === "teacher"
                  ? {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    }
                  : {
                      minLength: {
                        value: 8,
                        message: "ID must be exactly 8 characters",
                      },
                      maxLength: {
                        value: 8,
                        message: "ID must be exactly 8 characters",
                      },
                    }),
              })}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.id ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={
                role === "teacher"
                  ? "Enter your email"
                  : "Enter your 8-character ID"
              }
            />
            {errors.id && (
              <p className="mt-1 text-xs text-red-500">{errors.id.message}</p>
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

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <button onClick={handleSignUp}
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
            </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
