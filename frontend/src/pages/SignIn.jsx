import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Welcome Back!
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Log in to access your account and manage your activities.
        </p>

        {/* Sign-In Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2 text-gray-600">Remember Me</span>
            </label>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="text-gray-500 mx-2">or</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>

        {/* Social Sign-In Options */}
        <div className="mt-6 flex flex-col gap-4">
          <button className="w-full flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-200">
            <span className="mr-2">🔵</span> Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-lg font-semibold shadow-md hover:bg-red-600 transition duration-200">
            <span className="mr-2">🔴</span> Continue with Google
          </button>
        </div>

        {/* Footer Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
