import React from "react";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Please login to your account
        </p>
        {/* Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
