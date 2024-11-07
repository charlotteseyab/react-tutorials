import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate to handle redirect
import loginImg from '../../assets/img/login-img.svg'; // Your image for the login page

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook to redirect

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate a login API call. Replace this with your actual login logic.
    const isAuthenticated = await authenticateUser(email, password); // Replace with real authentication logic

    if (isAuthenticated) {
      // On successful login, redirect to the rider dashboard
      navigate('/rider-dashboard');
    } else {
      // Show an error if login fails (you can customize this further)
      alert('Login failed. Please check your credentials.');
    }
  };

  const authenticateUser = (email, password) => {
    // Simulate an API call for authentication
    // Replace this logic with actual backend call to authenticate
    return email === 'test@example.com' && password === 'password123'; // Example logic
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Login Form Container */}
      <div className="bg-white p-10 rounded shadow-md w-full md:w-96 flex-shrink-0 border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Log In
          </button>
        </form>
        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* Side Image */}
      <div className="hidden md:flex md:w-1/2 h-full justify-center items-center"> {/* Centering the image */}
        <img
          src={loginImg} // Update with your image path
          alt="Login Illustration"
          className="object-contain w-4/5 md:w-3/5 h-auto ml-4" // Resize the image to 80% on small screens and 60% on medium screens
        />
      </div>
    </div>
  );
};

export default Login;
