import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
          Join Us Today!
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Create an account to access exclusive features and grow with us.
        </p>

        {/* Sign-Up Form */}
        <form>
          {/* Full Name Input */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              className="form-checkbox text-green-600"
              required
            />
            <label htmlFor="terms" className="ml-2 text-gray-600">
              I agree to the{" "}
              <a
                href="#"
                className="text-green-600 hover:underline font-medium"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center">
          <div className="border-t border-gray-300 w-1/4"></div>
          <p className="text-gray-500 mx-2">or</p>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>

        {/* Social Sign-Up Options */}
        <div className="mt-6 flex flex-col gap-4">
          <button className="w-full flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-200">
            <span className="mr-2">🔵</span> Sign Up with Facebook
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-lg font-semibold shadow-md hover:bg-red-600 transition duration-200">
            <span className="mr-2">🔴</span> Sign Up with Google
          </button>
        </div>

        {/* Footer Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="text-green-600 hover:underline font-medium"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
