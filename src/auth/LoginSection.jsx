import React, { useState } from "react";
import loginIcon from "../assets/loginIcon.svg";
import { Link } from "react-router";

const LoginSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-[##EFE6FD33] rounded-3xl border-2 border-[#6200EE] p-8 md:p-12 shadow-sm">
        {/* Logo / Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src={loginIcon}
              alt="Login Icon"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Header Text */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-700">Welcome Back</h1>
          <p className="text-sm text-gray-400 mt-1">
            Please Enter Your Details Below to Continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
            />
          </div>

          {/* Helpers */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2 w-4 h-4 accent-[#6200EE]"
              />
              Remember me
            </label>
            <Link
              to={"forgot-password"}
              className="text-gray-500 hover:text-[#6200EE] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Link to={"/dashboard"}>
            <button
              type="submit"
              className="w-full py-4 mt-4 bg-gradient-to-r from-[#6200EE] to-purple-500 text-white font-medium rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
